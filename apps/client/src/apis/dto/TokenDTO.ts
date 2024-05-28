import { Result } from "../common";

export class TokenDTO {
    accessToken: string;
}

export type LoginResponse = Result<TokenDTO>;