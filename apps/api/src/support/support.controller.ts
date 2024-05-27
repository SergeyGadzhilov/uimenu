import { Body, Controller, Post } from "@nestjs/common";
import { CreateTicketDTO } from "./dto/create-ticket.dto";
import { SupportService } from "./support.service";

@Controller("support")
export class SupportController {
    constructor(private readonly service: SupportService) {}

    @Post("ticket")
    CreateTicket(@Body() ticket: CreateTicketDTO){
        return this.service.create(ticket);
    }
};