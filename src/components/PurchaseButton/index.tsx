import { ShoppingCartIcon } from "lucide-react";
import LinkComponent from "../LinkComponent";
import { Button } from "../ui/button";

export default function PurchaseButton() {

    return (
        <div className="w-full">
            <Button className="w-full bg-slate-500 text-white hover:bg-gradient-to-r from-green-200 to-green-400 transition-colors duration-500">
                <LinkComponent 
                    href="/#"
                    title="Comprar o produto"
                    className="flex flex-row gap-2 items-center font-semibold text-black overflow-hidden hover:text-slate-700 transition-colors duration-300 group-hover:translate-x-20"
                >
                    
                    <i className="hover:translate-x-28 duration-700"><ShoppingCartIcon size={24}/></i>Comprar
                </LinkComponent>
            </Button>
        </div>
    );
}
