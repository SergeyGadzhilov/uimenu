import { Injectable } from "@nestjs/common";
import { GetUploadUrlRequest } from "./aws.dto";
import { PutObjectCommand, S3Client, S3ClientConfig} from "@aws-sdk/client-s3"
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"

@Injectable()
export class AwsService {
    s3Configuration: S3ClientConfig = {
        region: "us-west-1",
        credentials: {
            accessKeyId: "AKIAZI2LI6P3HJ5IOCPH",
            secretAccessKey: "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"
        }
    }
    _aws: S3Client = new S3Client(this.s3Configuration);

    async GetSecureUrl(request: GetUploadUrlRequest) : Promise<string> {
        const command = new PutObjectCommand({
            Bucket: "rc-menu-storage",
            Key: `${request.menu}/${request.image.path}`
        });
        return await getSignedUrl(this._aws, command, {expiresIn: 3600});
    }
}