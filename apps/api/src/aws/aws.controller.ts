import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AwsService } from './aws.service';
import { GetUploadUrlRequest } from './aws.dto';

@UseGuards(JwtAuthGuard)
@Controller('aws')
export class AwsController {
  constructor(private readonly service: AwsService) {}

  @Post('upload')
  async upload(@Body() request: GetUploadUrlRequest) : Promise<{url: string}> {
    return {url: await this.service.GetSecureUrl(request)};
  }
}