import { Body, Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, ForgotPasswordDto, ResetPasswordDto } from './auth.dto';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() { email, password }: CreateUserDto) {
    return this.authService.login(email, password);
  }

  @Post('forgot')
  forgot(@Req() req: Request, @Body() body : ForgotPasswordDto) {
    return this.authService.forgot(`${req.protocol}://${req.get('Host')}`, body.email);
  }

  @Post('reset')
  reset(@Body() {password, token } : ResetPasswordDto) {
    return this.authService.reset(password, token);
  }
}
