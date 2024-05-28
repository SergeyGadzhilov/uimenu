import { Result } from "../common";

export class SupportTicketDTO
{
    name: string;
    email: string;
    message: string;
};

export type CreateTicketResponse = Promise<Result<SupportTicketDTO>>;