"use client";
import LinkComponent from "../LinkComponent";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui/navigation-menu";

export default function Menu() {
    return (
        <div>
            <NavigationMenu>
                <NavigationMenuList className='flex gap-4'>
                    <NavigationMenuItem>
                        <LinkComponent
                            href='/'
                            anchor='Inicio'
                            title='Clique para a Home'
                        />  
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <LinkComponent
                            href='/categoria'
                            anchor='Categorias'
                            title='Clique para ver as Categorias'
                        />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}
