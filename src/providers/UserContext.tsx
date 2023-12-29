"use client";

import { parseCookies, setCookie } from "nookies";

import { loginAccount } from "@components/services/account/functions-auth";
import { SetStateAction, createContext, useEffect, useState } from "react";

type User = {
    nome: string,
    email: string,
    avatar: string
}

type SignInData = {
    email: string;
    password: string;
}

type AuthContextType = {
    user: User | null,
    signInAccount: (data: SignInData) => Promise<void>,
    setUser: SetStateAction<any>,
    isAuthenticated: boolean
};

// tipar o contexto 'as'
export const UserContext = createContext({} as AuthContextType);

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(null);
    const isAuthenticated = !!user;

    useEffect(() => {
        const { "token_jwt": token } = parseCookies();
        console.log(token);
        console.log(user);
        setCookie(undefined, "token_jwt", token, {
            maxAge: 60 * 60 * 1, // 1 hora
        });
        window.sessionStorage.setItem("token_jwt", token);
    },[user]);

    async function signInAccount({email, password}: SignInData) {
        console.log(email, password);
        const { token, userLogged } = await loginAccount({
            email,
            password
        });
        window.sessionStorage.setItem("token_jwt", token);
        setCookie(undefined, "token_jwt", token, {
            maxAge: 60 * 60 * 1, // 1 hora
        });
        setUser(userLogged);
    }
    return (
        <UserContext.Provider value={{ user, signInAccount, isAuthenticated, setUser }}>
            {children}
        </UserContext.Provider>
    );
}; 
// receber token da função login, e definir usuario buscando no backend as informações
