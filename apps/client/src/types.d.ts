/* eslint-disable @typescript-eslint/no-explicit-any */

import { ForgotPasswordResponse, ResetPasswordRequest, ResetPasswrodResponse } from "./apis/dto/AuthDTO";
import { CreateUserResponse } from "./apis/dto/CreateUserDTO";
import { LoginResponse } from "./apis/dto/TokenDTO";

type Login ={
    email: string;
    password: string;
}
type Token = strings
type Data= {any} 
type Id = string 

type DataToken = Data & Token 

type IdToken = Id & Token

type IdDataToken = Id & DataToken

type ItemType =
    {category?:string,name:string,price:string,image:string,isAvailable:boolean, description:string,
        quantity?:number, id?:string,categoryId?:string, id?:string
    }
type AuthContextType={
    token:string,
    loading:boolean,
    LogIn: (login: Login) => Promise<LoginResponse>,
    Register: (login: Login) => Promise<CreateUserResponse>,
    ForgotPassword: (email: string) => Promise<ForgotPasswordResponse>,
    ResetPassword: (reqeust: ResetPasswordRequest) => Promise<ResetPasswrodResponse>,
    signOut:() => void,
}

type PlaceType= {
    id:             string;
    name:           string;
    ownerId:        string;
    image:          string;
    numberOfTables: number;
    createdAt:      Date;
    updatedAt:      Date;
    font?: string;
    color?: string;
    categories:     CategoryType[];
}

type CategoryType ={
    id:      string;
    name:    string;
    placeId: string;
    items:   ItemType[];
}

type OrderType  = {
        id:            number;
        placeId:       string;
        table:         number;
        detail:        string;
        paymentIntent: string;
        amount:        number;
        status:        string;
        createdAt:     Date;
        updatedAt:     Date;
    }

export type { Login, DataToken, IdDataToken, Token, Data, IdToken,ItemType,AuthContextType,CategoryType,PlaceType, OrderType } 