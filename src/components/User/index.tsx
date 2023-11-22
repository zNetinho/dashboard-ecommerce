"use client";
import { LogInIcon, LogOutIcon, UserCircle } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

import { ModeToggle } from "../SwitchTheme";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Cart from "../Cart";


export default function UserArea() {
    const { data: session, status } = useSession();
    // token ja está chegando atráves da session
    console.log(session);
    const user = {
        avatar: session?.user?.avatar || "",
        nome: session?.user?.name,
    };
    const userCustom = {
        avatar: session?.user,
    };
    
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
                    <AvatarImage src={ user.avatar || userCustom.avatar } />
                    <AvatarFallback>{<UserCircle size={42}/>}</AvatarFallback>
                </Avatar>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    { status === "authenticated" && <SheetTitle>Olá, seja bem vindo, { user?.nome }</SheetTitle>}
                    { status === "unauthenticated" && <SheetTitle>Deseja fazer login</SheetTitle>}
                </SheetHeader>
                <div className="mt-10">
                    
                    { status === "unauthenticated" && <Button onClick={handleClickLogin} variant="outline" className="w-full justify-start gap-2">
                        <LogInIcon size={16}/>
                                Fazer Login
                    </Button>}
                
                    
                    { status === "authenticated" && <Button onClick={handleClickLogout} variant="outline" className="w-full justify-start gap-2">
                        <LogOutIcon size={16}/>
                                 Fazer Logout
                    </Button>}
                
                </div>
                <div>
                    { status === "authenticated" && <Cart /> }
                </div>
                <div className='mt-5 absolute bottom-5 right-5'>
                    <ModeToggle />
                </div>
            </SheetContent>
        </Sheet>
    );
}
