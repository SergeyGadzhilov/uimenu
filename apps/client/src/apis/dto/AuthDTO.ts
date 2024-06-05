import { Result } from "../common";

export class ResetPasswordRequest {
    password: string;
    token: string;
}
export type ResetPasswrodResponse = Result<void>;

export class ForgotPasswordRequest {
    email: string;
}
export type ForgotPasswordResponse = Result<void>;
