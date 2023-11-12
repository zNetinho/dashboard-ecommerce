"use client";

import { parseCookies, setCookie } from "nookies";

import { fetchInfoUser, loginAccount } from "@components/services/account/functions-auth";
import { createContext, useContext, useEffect, useState } from "react";

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
    signIn: (data: SignInData) => Promise<void>,
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
        const user = async () => {
            const user = await fetchInfoUser(token);
            setUser(user);
        };
        console.log(user);
    },[user]);

    async function signIn({email, password}: SignInData) {
        console.log(email, password);
        const { token, userLogged } = await loginAccount({
            email,
            password
        });
        setCookie(undefined, "token_jwt", token, {
            maxAge: 60 * 60 * 1, // 1 hora
        });
        setUser(userLogged);
    }
    return (
        <UserContext.Provider value={{ user, signIn, isAuthenticated }}>
            {children}
        </UserContext.Provider>
    );
}; 
// receber token da função login, e definir usuario buscando no backend as informações

export const useUser = () => {
    return useContext(UserContext);
};

