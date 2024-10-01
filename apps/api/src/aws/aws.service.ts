import { Injectable } from '@nestjs/common';
import { GetUploadUrlRequest } from './aws.dto';
import { PutObjectCommand, S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

@Injectable()
export class AwsService {
  s3Configuration: S3ClientConfig = {
    region: '',
    credentials: {
      accessKeyId: '',
      secretAccessKey: '',
    },
  };
  _aws: S3Client = new S3Client(this.s3Configuration);

  async GetSecureUrl(
    userid: string,
    request: GetUploadUrlRequest,
  ): Promise<string> {
    const command = new PutObjectCommand({
      Bucket: 'rc-menu-storage',
      Key: `${userid}/${request.menu ?? 'places'}/${request.image.path}-${Date.now()}`,
    });
    return await getSignedUrl(this._aws, command, { expiresIn: 3600 });
  }
}
