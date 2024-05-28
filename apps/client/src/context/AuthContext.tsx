/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { Login } from "../types";
import {LogIn as ApiLogin, ApiRegister} from "../apis/auth";
import { LoginResponse } from "../apis/dto/TokenDTO";
import { CreateUserResponse } from "../apis/dto/CreateUserDTO";

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

    const signOut = ()=>{
        localStorage.removeItem("token");
        setToken("");
    }

    const value = {
        token,
        signOut,
        LogIn,
        Register
    };
    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;