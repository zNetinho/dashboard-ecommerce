import { setCookie } from "nookies";

const URL_API = "http://localhost:3001/api/user/login";


export async function fetchUsers() {
    const URL_API = "http://localhost:3001/api/user";

    try {
        const resposta = await fetch(URL_API, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                // Adicione cabeçalhos de autenticação, se necessário
            },
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            // Lida com a lista de usuários retornada pela API
            return dados;
            // console.log("Lista de usuários:", dados.users);
        } else {
            // Lidar com erros ao obter a lista de usuários
            console.error("Erro ao obter a lista de usuários:", dados.message);
        }
    } catch (error) {
        console.error("Erro de rede:", error);
    }
}

type SignInData = {
    email: string;
    password: string;
  }

export async function loginAccount({email, password}: SignInData) {
    const URL_API = "http://localhost:3001/api/user/login";

    try {
        const resposta = await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Adicione cabeçalhos de autenticação, se necessário
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });

        const dados = await resposta.json();
        const token = dados.token;
        const userLogged = dados.userLogged;
        if(token) {
            setCookie(undefined, "token_jwt", token, {
                maxAge: 60 * 60 * 1 // 1 hora
            });
        }
        console.log(dados);
        return dados;
        
    } catch (error) {
        console.error("Erro de rede:", error);
    }
}

export async function fetchInfoUser(token: string) {
    const URL_API = "http://localhost:3001/api/user/login-info";

    try {
        const resposta = await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Adicione cabeçalhos de autenticação, se necessário
            },
            body: JSON.stringify({
                token,
            })
        });

        const dados = await resposta.json();
        console.log(dados);

        return dados;
        
    } catch (error) {
        console.error("Erro de rede:", error);
    }
}

export async function createAccount(nome: any, email: any, password: any, confirm_password: string) {
    const URL_API = "http://localhost:3001/api/user";

    try {
        const resposta = await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                // Adicione cabeçalhos de autenticação, se necessário
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                password: password,
                confirm_password: confirm_password
            })
        });

        const dados = await resposta.json();

        if (resposta.ok) {
            // Lida com a lista de usuários retornada pela API
            return dados;
            // console.log("Lista de usuários:", dados.users);
        } else {
            // Lidar com erros ao obter a lista de usuários
            console.error("Erro ao obter a lista de usuários:", dados.message);
        }
    } catch (error) {
        console.error("Erro de rede:", error);
    }
}