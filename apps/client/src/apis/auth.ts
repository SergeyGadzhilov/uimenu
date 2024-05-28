import { Login } from "../types";
import { PostRequest } from "./common";
import { CreateUserResponse, UserDTO } from "./dto/CreateUserDTO";
import { LoginResponse, TokenDTO } from "./dto/TokenDTO";

export async function LogIn(login: Login) : Promise<LoginResponse> {
    return await PostRequest<Login, TokenDTO>("/auth/login/", login);
}

export async function ApiRegister(login: Login) : Promise<CreateUserResponse> {
    return await PostRequest<Login, UserDTO>("/users/", login);
}