import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateTicketDTO extends Object {
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    message: string;
}