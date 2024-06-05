/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { Login } from "../types";
import {ApiForgotPassword, LogIn as ApiLogin, ApiRegister, ApiResetPassword} from "../apis/auth";
import { LoginResponse } from "../apis/dto/TokenDTO";
import { CreateUserResponse } from "../apis/dto/CreateUserDTO";
import { ForgotPasswordResponse, ResetPasswordRequest, ResetPasswrodResponse } from "../apis/dto/AuthDTO";

 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-expect-error
const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));

    const SaveToken = (token: string) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const LogIn = async (login: Login) : Promise<LoginResponse> => {
        const response = await ApiLogin(login);
        if (response.IsSuccess) {
            SaveToken(response.Data.accessToken);
        }
        return response;
    }

    const Register = async (login: Login) : Promise<CreateUserResponse> => {
        return await ApiRegister(login);
    };

    const ForgotPassword = async (email: string) : Promise<ForgotPasswordResponse> => {
        return await ApiForgotPassword(email);
    }

    const ResetPassword = async (request: ResetPasswordRequest): Promise<ResetPasswrodResponse> => {
        return await ApiResetPassword(request);
    }

    const signOut = ()=>{
        localStorage.removeItem("token");
        setToken("");
    }

    const value = {
        token,
        signOut,
        LogIn,
        Register,
        ForgotPassword,
        ResetPassword
    };
    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;