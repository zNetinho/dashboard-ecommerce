"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { LogInIcon, LogOutIcon, UserCircle } from "lucide-react";
import { ModeToggle } from "../SwitchTheme";

export default function UserArea() {

    const { status, data } = useSession();

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
                    <AvatarImage src={data?.user?.image || ""} />
                    <AvatarFallback>{<UserCircle size={42}/>}</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    { status === "authenticated" && <SheetTitle>Olá, seja bem vindo, {data.user?.name}</SheetTitle>}
                    { status === "unauthenticated" && <SheetTitle>Deseja fazer login</SheetTitle>}
                    <SheetDescription>
                        { status === "unauthenticated" && 
          <Button onClick={handleClickLogin} variant="outline" className="w-full justify-start gap-2">
              <LogInIcon size={16}/>
            Fazer Login
          </Button>
                        }
                        { status === "authenticated" && 
          <Button onClick={handleClickLogout} variant="outline" className="w-full justify-start gap-2">
              <LogOutIcon size={16}/>
            Fazer Logout
          </Button>
                        }
                    </SheetDescription>
                </SheetHeader>
                <div className='mt-5 absolute bottom-5 right-5'>
                    <ModeToggle />
                </div>
            </SheetContent>
        </Sheet>
    );
}
