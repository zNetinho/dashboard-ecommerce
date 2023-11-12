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
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase/config";
import { Router } from "lucide-react";

// async function handleClickLogin(email: string, password: string) {
//     try {
//         const user = await loginAccount({email, password});
//         console.log(user);
//     } catch (error) {
//         console.log(error);
//     }
// }

export default function FormLoginAccount() {
    const router = useRouter();
    const { signInAccount, isAuthenticated, setUser } = useContext(UserContext);
    const { register, handleSubmit } = useForm();

    function handleGoogleSignIn() {
        const provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider)
            .then((result) => {
                const userGoogle = {
                    email: result.user.email,
                    nome: result.user.displayName,
                    avatar: result.user.photoURL
                };
                setUser(userGoogle);
                // criar central do usuario no futuro
                router.replace("/");
            })
            .catch((error) => {
                console.log(error);
            });
    
    }

    async function handleSignIn(data: any) {
        await signInAccount(data);
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
            <div>
                <Button onClick={handleGoogleSignIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}
