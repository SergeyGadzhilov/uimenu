import { PrismaService } from "src/prisma/prisma.service";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class  SupportService {
    constructor(private prisma: PrismaService) {
    }

    create(ticket: CreateTicketDTO) {
        return this.prisma.supportTicket.create({
            data: {...ticket}
        });
    }
};