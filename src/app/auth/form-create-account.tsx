"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@components/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle
} from "@components/components/ui/card";
import { Input } from "@components/components/ui/input";
import { Label } from "@components/components/ui/label";
import { createAccount, createAccountGoogle } from "@components/services/account/functions-auth";
import { useReducer, useState } from "react";

async function handleClickCreateAccount(nome: string, email:string, password: string, confirm_password: string) {
    try {
        const user = createAccount(nome, email, password, confirm_password);
    } catch (error) {
        console.log(error);
    }
}

async function handleClickCreateWithGoogle( email:string, password: string,) {
    try {
        const user = await createAccountGoogle(email, password);
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

export function FormCreateAccount() {
    const [email, setEmail] = useState("Pedro Duarte");
    const [nome, setNome] = useState("Pedro Duarte");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirmPassword] = useState("");
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Registre-se</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="name">nome</Label>
                        <Input id="name" defaultValue="teste@exemplo.com" onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">e-mail</Label>
                        <Input id="email" defaultValue="teste@exemplo.com" onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Senha</Label>
                        <Input id="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="confirm_password">Confirme a senha</Label>
                        <Input id="confirm_password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={() => handleClickCreateAccount(nome, email, password, confirm_password)}>Save changes</Button>
                </CardFooter>
            </Card>
            <div>
                <Button onClick={() => handleClickCreateWithGoogle( email, password)}>
                    Create With Google
                </Button>
            </div>
        </>

    );
}