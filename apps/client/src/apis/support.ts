import { PostRequest } from "./common";
import { CreateTicketResponse, SupportTicketDTO } from "./dto/SupportTicketDTO";

export async function CreateSupportTicket(ticket: SupportTicketDTO) : CreateTicketResponse {
    if (ticket == null) {
        return;
    }
    return await PostRequest<SupportTicketDTO, SupportTicketDTO>('support/ticket', ticket);
}