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
import { useState } from "react";

import { signIn } from "next-auth/react";


export default function FormLoginAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Faça o login na sua conta</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <form>
                        <div className="space-y-1">
                            <Label>Email</Label>
                            <Input onChange={(e) => setEmail(e.target.value)} id="email"/>
                        </div>
                        <div className="space-y-1">
                            <Label>Senha</Label>
                            <Input onChange={(e) => setPassword(e.target.value)}  id="password" type="password" />
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-center">
                    {/* onClick={handleSubmit(handleSignIn)} */}
                    <Button
                        className="w-[100px] bg-slate-200 bg-gradient-to-r from-violet-400 to-violet-700 text-white" 
                        onClick={() => signIn("credentials", {
                            redirect: true,
                            email,
                            password
                        })}>Logar</Button>
                </CardFooter>
            </Card>
            <div className="flex flex-col my-7">
                <Button onClick={() => signIn("google")} className="w-full bg-slate-200 hover:bg-gradient-to-r hover:text-white from-green-300 to-green-600 transition-colors duration-500 ease-in-out">Entre com sua conta Google</Button>
            </div>
        </div>
    );
}
