import { PrismaService } from "src/prisma/prisma.service";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { Injectable } from "@nestjs/common";
import { SendEmail } from "src/email/mailer";

@Injectable()
export class  SupportService {
    constructor(private prisma: PrismaService) {
    }

    async create(ticket: CreateTicketDTO) {
        await SendEmail({
            to: "support@uimenu.com",
            from: ticket.email,
            subject: `Email from user ${ticket.name}`,
            data: {user_name: ticket.name, message: ticket.message},
            template: "user_email"
        });

        return this.prisma.supportTicket.create({
            data: {...ticket}
        });
    }
};