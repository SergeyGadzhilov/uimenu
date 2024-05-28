import { Login } from "../types";
import { PostRequest } from "./common";
import { LoginResponse, TokenDTO } from "./dto/TokenDTO";

export async function LogIn(login: Login) : Promise<LoginResponse> {
    return await PostRequest<Login, TokenDTO>("/auth/login/", login);
}