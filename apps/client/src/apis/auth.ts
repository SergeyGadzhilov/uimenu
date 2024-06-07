import { Login } from "../types";
import { PostRequest } from "./common";
import { ForgotPasswordRequest, ForgotPasswordResponse, ResetPasswordRequest, ResetPasswrodResponse } from "./dto/AuthDTO";
import { CreateUserResponse, UserDTO } from "./dto/CreateUserDTO";
import { LoginResponse, TokenDTO } from "./dto/TokenDTO";

export async function LogIn(login: Login) : Promise<LoginResponse> {
    return await PostRequest<Login, TokenDTO>("auth/login/", login);
}

export async function ApiRegister(login: Login) : Promise<CreateUserResponse> {
    return await PostRequest<Login, UserDTO>("users/", login);
}

export async function ApiForgotPassword(email: string) : Promise<ForgotPasswordResponse> {
    return await PostRequest<ForgotPasswordRequest, void>("auth/forgot", {email});
}

export async function ApiResetPassword(request: ResetPasswordRequest) : Promise<ResetPasswrodResponse> {
    return await PostRequest<ResetPasswordRequest, void>("auth/reset", request);
}