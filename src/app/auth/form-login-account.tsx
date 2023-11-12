"use client";

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
import { UserContext } from "@components/providers/UserContext";
import { loginAccount } from "@components/services/account/functions-auth";
import { redirect, useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

async function handleClickLogin(email: string, password: string) {
    try {
        const user = await loginAccount({email, password});
        console.log(user);
    } catch (error) {
        console.log(error);
    }
}

export default function FormLoginAccount() {
    const router = useRouter();
    const { signIn, isAuthenticated } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    async function handleSignIn(data: any) {
        await signIn(data);
        if ( data ) {
            router.replace("/");
        }
    }
    
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Faça o login na sua conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-1">
                            <Label>Usuario</Label>
                            <Input { ...register("email") } id="email" defaultValue="admin@teste.com"/>
                        </div>
                        <div className="space-y-1">
                            <Label>Senha</Label>
                            <Input { ...register("password") } id="password" type="password" />
                        </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button type="submit" onClick={handleSubmit(handleSignIn)}>Logar</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
