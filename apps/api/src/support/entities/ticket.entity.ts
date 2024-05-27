export class Ticket {
    id: string;
    name: string;
    email: string;
    message: string;
    user?: string;
    createdAt: Date;
    updatedAt: Date;
}