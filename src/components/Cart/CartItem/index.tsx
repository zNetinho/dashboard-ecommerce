
import { ArrowLeftIcon, ArrowRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { CartContext } from "@components/providers/Cart";
import { CartProduct } from "@components/types/Product/CartProduct";
import { Button } from "@components/components/ui/button";

interface CartItemProps {
  product: CartProduct;
}

const CartItem = ({product}: any) => {
    console.log(product);

    const { decreaseProductQuantity, increaseProductQuantity, removeProductToCart } = useContext(CartContext);

    const handleDecreaseProductQuantityClick = () => {
        decreaseProductQuantity(product.quantityItem);
    };
  
    const handleIncreaseProductQuantityClick = () => {
        increaseProductQuantity(product.quantityItem);
    };

    const handleRemoveProductToCartClick = () => {
        removeProductToCart(product.sku);
    };

    return (
        <div className="flex items-center justify-between">
            <div>
                {/* foto e nome */}
                <div className="flex items-center gap-4">
                    <div className="flex h-[77px] w-[77px] bg-accent items-center justify-center rouded-lg">
                        <Image 
                            src={product.img[0]}
                            alt={product.nome}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto max-w-[80%] max-h-[70%]"
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">{product.nome}</p>
                        <div className="flex items-center gap-2">
                            <p className="font-bold text-sm">R$ {product.preco.toFixed(2)}</p>
                            {/* {product.discountPercent > 0 && (
                                <p className="opacity-75 line-through text-xs">R$ {Number(product.basePrice).toFixed(2)}</p>
                            )} */}
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <Button size="icon" variant="outline" className="h-8 w-8">
                                <ArrowLeftIcon size={14} onClick={handleDecreaseProductQuantityClick}/>
                            </Button>
                            <span className="text-xs">{product.quantityItem}</span>
                            <Button size="icon" variant="outline" className="h-8 w-8" onClick={handleIncreaseProductQuantityClick}>
                                <ArrowRightIcon size={14}/>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* deletar */}
                <Button size="icon" variant="outline" onClick={handleRemoveProductToCartClick}>
                    <TrashIcon size={16}/>
                </Button>
            </div>
        </div>
    );
};
 
export default CartItem;