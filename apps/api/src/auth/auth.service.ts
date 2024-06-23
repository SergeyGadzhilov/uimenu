import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from './auth.dto';
import * as bcrypt from 'bcrypt';
import * as crypto from "crypto";
import { SendEmail } from 'src/email/mailer';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(email: string, password: string): Promise<TokenDto> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return {
      accessToken: this.jwtService.sign({
        userId: user.id,
        email,
      }),
    };
  }

  async createResetToken(userId: string) : Promise<string> {
    const token = crypto.randomBytes(32).toString('hex');
    const hash = crypto.createHash('sha256').update(token).digest('hex');

    await this.prisma.resetTokens.upsert({
      where: {ownerId: userId},
      update: {ownerId: userId, token: hash},
      create: {ownerId: userId, token: hash}
    });

    return token.toString();
  }

  async forgot(baseUrl: string, email: string): Promise<any> {
    const user = await this.getUser(email);
    const token = await this.createResetToken(user.id);

    await SendEmail({
      from: "UIMenu <no-reply@uimenu.com>",
      to: user.email,
      subject: "UIMenu reset password",
      text: `We have received a password reset request. Please, use the following link to reset your password:
${baseUrl}/password/reset/${token}
This reset password link will be valid only for 10 minutes.`
    });

    return {};
  }

  async reset(password: string, token: string) : Promise<any> {
    const hash = crypto.createHash('sha256').update(token).digest('hex');
    const expirationDate = new Date(Date.now() + 30000);
    const resetToken = await this.prisma.resetTokens.findUnique({
      where: {token: hash, updatedAt: {lte: expirationDate}}
    });

    if (!resetToken) {
      throw new HttpException('Invalid reset token', HttpStatus.NOT_FOUND);
    }

    await this.prisma.user.update({
      where: {id: resetToken.ownerId},
      data: {password: await bcrypt.hash(password, 10)}
    });

    return {};
  }

  async getUser(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }
}
