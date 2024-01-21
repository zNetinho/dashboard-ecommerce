"use client";
import Cart from "@components/components/Cart";
import Logo from "@components/components/layout/Header/Logo";
import Menu from "@components/components/Menu";
import UserArea from "@components/components/User";


export default function Header() {
    return (
        <header className='flex justify-around items-center'>
            <div>
                <Logo/> 
            </div>
            <div>
                <Menu />
            </div>
            <div>
                {/* Busca */}

            </div>
            <div className='flex gap-4'>
                <UserArea />
                <Cart />
            </div>
        </header>
    );
}
