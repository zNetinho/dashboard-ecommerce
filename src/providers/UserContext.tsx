"use client";

import { destroyCookie, parseCookies, setCookie } from "nookies";

import { loginAccount } from "@components/services/account/functions-auth";
import { SetStateAction, createContext, useContext, useEffect, useState } from "react";

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
    // setUser: SetStateAction<any>,
    isAuthenticated: boolean
    handleLogout: () => void
};

// tipar o contexto 'as'
export const UserContext = createContext({} as AuthContextType);

export const UserProvider = ({ children }: any) => {
    const { user } = useContext(UserContext)
    // const [user, setUser] = useState(null);
    const isAuthenticated = !!user;

    useEffect(() => {

        console.log(user);
        // setCookie(undefined, "token_jwt", token, {
        //     maxAge: 60 * 60 * 1, // 1 hora
        // });
        // window.sessionStorage.setItem("token_jwt", token);
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
        // setUser(userLogged);
    }

    const handleLogout = () => {
        destroyCookie(undefined, "token_jwt");
        window.sessionStorage.removeItem("token_jwt");
        // setUser(null);
      };

    return (
        <UserContext.Provider value={{ user, signInAccount, isAuthenticated,  handleLogout }}>
            {children}
        </UserContext.Provider>
    );
}; 
// receber token da função login, e definir usuario buscando no backend as informações
