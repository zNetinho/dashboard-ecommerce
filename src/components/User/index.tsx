"use client";
import { LogInIcon, LogOutIcon, UserCircle } from "lucide-react";
import { useContext, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";

import { UserContext } from "@components/providers/UserContext";
import { ModeToggle } from "../SwitchTheme";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";


export default function UserArea() {

    const { user, isAuthenticated } = useContext(UserContext);
    
    useEffect(()=> {
    }, [user]);

    const handleClickLogin = async () => {
        await signIn();
    };

    const handleClickLogout = async () => {
        await signOut();
    };

    return (
        <Sheet>
            <SheetTrigger className='bg-white w-[50px] h-[50px] rounded-full'>
                <Avatar className='flex justify-center items-center m-auto'>
                    <AvatarImage src={ user?.avatar || ""} />
                    <AvatarFallback>{<UserCircle size={42}/>}</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Olá, seja bem vindo, { user?.nome }</SheetTitle>
                    <SheetTitle>Deseja fazer login</SheetTitle>
                </SheetHeader>
                <div className="mt-10">
                    
                    { isAuthenticated == false && <Button onClick={handleClickLogin} variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16}/>
                                    Fazer Login
                    </Button>}
                
                    
                    { isAuthenticated && <Button onClick={handleClickLogout} variant="outline" className="w-full justify-start gap-2">
                        <LogOutIcon size={16}/>
                                    Fazer Logout
                    </Button>}
                
                </div>
                <div className='mt-5 absolute bottom-5 right-5'>
                    <ModeToggle />
                </div>
            </SheetContent>
        </Sheet>
    );
}
