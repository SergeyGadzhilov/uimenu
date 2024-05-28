/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react";
import { signIn as singInApi, register as registerApi  } from "../api";
import { Login } from "../types";
import {LogIn as ApiLogin} from "../apis/auth";
import { LoginResponse } from "../apis/dto/TokenDTO";

 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-expect-error
const AuthContext = createContext();

interface SignInResponse {
    accessToken?: string; // Adjust the type according to your actual response structure
}

export function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading,setLoading] = useState(false);

    const SaveToken = (token: string) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const signIn = async ({ email, password }: { email: string; password: string },
    callback=()=>"" ): Promise<void>=>{
        setLoading(true);
        const response = await singInApi({email,password}) as SignInResponse;
        if(response && response.accessToken){
            localStorage.setItem("token",response.accessToken);
            setToken(response.accessToken);
            callback()
        }
        setLoading(false);
    }

    const LogIn = async (login: Login) : Promise<LoginResponse> => {
        const response = await ApiLogin(login);
        if (response.IsSuccess) {
            SaveToken(response.Data.accessToken);
        }
        return response;
    }

    const signOut = ()=>{
        localStorage.removeItem("token");
        setToken("");
    }

    const register = async ({email,password}: { email: string; password: string },callback)=>{
        setLoading(true);
        const response:any = await registerApi({email,password});
        if(response && response.id){
            callback()
        }
        setLoading(false);
    }

    const value = {
        token,
        loading,
        signIn,
        signOut,
        register,
        LogIn
    };
    
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;