import ButtonAddToCart from "@components/components/Cart/ButtonAddToCart";
import PurchaseButton from "@components/components/PurchaseButton";
import { Button } from "@components/components/ui/button";
import { CartContext } from "@components/providers/Cart";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React, { useContext, useState } from "react";

export default function HandleCart({ product }: any) {
    console.log(product);
    const [quantityItem, setQuantityItem] = useState(1);

    const handleDecreaseQuantityClick = () => {
        setQuantityItem((prev) => (prev === 1 ? prev : prev - 1));
    };
    
    const handleIncreaseQuantityClick = () => {
        setQuantityItem((prev) =>  prev + 1);
    };

    const { addProductToCart } = useContext(CartContext);
    const handleAddToCart = () => {
        product = { ... product,
            quantityItem,};
        console.log(product);
        addProductToCart({ ...product });
    };

    return (
        <>
            {/* Começo do increase */}
            <div className="flex items-center gap-2 mt-4">
                <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                    <ArrowLeftIcon size={16}/>
                </Button>
                <span>{quantityItem}</span>
                <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                    <ArrowRightIcon size={16}/>
                </Button>
            </div>
            {/* Fim do increase */}
            {/* Começo do purchase button */}
            <div className="flex flex-col gap-2 mt-4">
                <div className="w-full mt-10">
                    <PurchaseButton 
                    />
                </div>
                <div>
                    <ButtonAddToCart onClick={handleAddToCart}/>
                </div>
            </div>
            {/* Fim do purchase button */}
        </>
    );
}
