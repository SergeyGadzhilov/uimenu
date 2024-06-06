import { PassportModule } from "@nestjs/passport";
import { PrismaModule } from "src/prisma/prisma.module";
import { AwsService } from "./aws.service";
import { AwsController } from "./aws.controller";
import { Module } from "@nestjs/common";

@Module({
    imports: [
      PrismaModule,
      PassportModule,
    ],
    controllers: [AwsController],
    providers: [AwsService],
})

export class AwsModule {}