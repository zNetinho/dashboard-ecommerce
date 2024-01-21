import { createCheckOut } from "@components/app/actions/checkout";
import { CartContext } from "@components/providers/Cart";
import { Avatar } from "@radix-ui/react-avatar";
import { loadStripe } from "@stripe/stripe-js";
import { ShoppingCartIcon } from "lucide-react";
import { useContext } from "react";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import CartItem from "./CartItem";
import computeProductTotalPrice from "@components/helpers/product/product-cart";
import { any } from "zod";


const Cart = () => {
    const { products, total } = useContext(CartContext);

    const handleFinishPurchase = async () => {
        const checkout = await createCheckOut(products);

        try {
            const stripe = await loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || ""
            );
            stripe?.redirectToCheckout({
                sessionId: checkout.id
            });
        } catch (error) {
            console.log(error);
        }

        console.log(checkout);
    };

    return (
        <div>
            <Sheet>
                <SheetTrigger className='bg-white w-[50px] h-[50px] rounded-full'>
                    <Avatar className='flex justify-center items-center m-auto'>
                        <ShoppingCartIcon color="black"/>
                    </Avatar>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <div>
                            <strong>Carrinho</strong>
                        </div>
                    </SheetHeader>
                    <div className="flex h-auto flex-col gap-5 overflow-hidden">
                        <ScrollArea className="h-[550px]">
                            <div className="flex flex-col gap-8">
                                {products.length > 0 ? (
                                    products.map((product) => (
                                        <CartItem
                                            key={product.sku}
                                            product={computeProductTotalPrice(product as any) as any}
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
                            <p>R$ {Number(total)}</p>
                        </div>

                        <Button className="uppercase mt-7 font-bold" onClick={handleFinishPurchase}>
                            Finalizar compra
                        </Button>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    );
};
 
export default Cart;