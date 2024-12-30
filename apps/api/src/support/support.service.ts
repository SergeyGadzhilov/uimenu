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
            from: "UIMenu <no-reply@uimenu.com>",
            subject: `Email from user ${ticket.name}`,
            template: "user_email",
            data: {
                user_email: ticket.email,
                user_name: ticket.name,
                user_message: ticket.message
            },
        });

        return this.prisma.supportTicket.create({
            data: {...ticket}
        });
    }
};