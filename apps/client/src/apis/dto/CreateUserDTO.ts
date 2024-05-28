import { Result } from "../common";

export class UserDTO {
    id: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export type CreateUserResponse = Result<UserDTO>;