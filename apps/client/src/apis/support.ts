import { PostRequest } from "./common";
import { SupportTicketDTO } from "./dto/SupportTicketDTO";

export async function CreateSupportTicket(ticket: SupportTicketDTO){
    if (ticket == null) {
        return;
    }
    const response = await PostRequest<SupportTicketDTO, SupportTicketDTO>('support/ticket', ticket);
    if (!response.IsSuccess) {
        console.log(JSON.stringify(response));
    }

    return response;
}