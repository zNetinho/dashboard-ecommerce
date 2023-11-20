import { CartContext } from "@components/providers/Cart";
import { useContext } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import CartItem from "./CartItem";


const Cart = () => {
    const { products, total  } = useContext(CartContext);

    // const handleFinishPurchase = async () => {
    //     const checkout = await createCheckOut(products);

    //     const stripe = await loadStripe(
    //         process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
    //     );

    //     stripe?.redirectToCheckout({
    //         sessionId: checkout.id
    //     });
    //     console.log(checkout);
    // };

    return (
        <div className="flex flex-col gap-8 mt-7">
            <div>
                <strong>Carrinho</strong>
            </div>
            <div className="flex h-full max-h-full flex-col gap-5 overflow-hidden">
                <ScrollArea className="h-[550px]">
                    <div className="flex flex-col gap-8">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <CartItem
                                    key={product.sku}
                                    product={product}
                                />
                            ))
                        ) : (
                            <p className="text-center font-semibold">
                Carrinho vazio. Vamos fazer compras?
                            </p>
                        )}
                    </div>
                </ScrollArea>
            </div>

            <div className="flex flex-col gap-3">
                <Separator />

                {/* <div className="flex items-center justify-between text-xs">
                    <p>Subtotal</p>
                    <p>R$ {subTotal}</p>
                </div> */}
                <Separator />
                <div className="flex items-center justify-between text-xs">
                    <p>Entrega</p>
                    <p>GRÁTIS</p>
                </div>
                <Separator />
        
                {/* <div className="flex items-center justify-between text-xs">
                    <p>Total</p>
                    <p>R$ {discount}</p>
                </div> */}
                <Separator />

                <div className="flex items-center justify-between text-xs">
                    <p>Total</p>
                    <p>R$ {total}</p>
                </div>

                <Button className="uppercase mt-7 font-bold">
                    Finalizar compra
                </Button>

            </div>
        </div>
    );
};
 
export default Cart;