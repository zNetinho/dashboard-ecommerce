"use client";
import { CartProduct } from "@components/types/Product/CartProduct";
import { ReactNode, createContext, useMemo, useState } from "react";

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    total: number;
    subTotal: number;
    addProductToCart: (product: CartProduct) => void;
    decreaseProductQuantity: (productId: number) => void;
    increaseProductQuantity: (productId: number) => void;
    removeProductToCart: (productId: number) => void;
  }
  
export const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartTotalDiscount: 0,
    total: 0,
    subTotal: 0,
    addProductToCart: () => {},
    decreaseProductQuantity: () => {},
    increaseProductQuantity: () => {},
    removeProductToCart: () => {},
});

const CartProvider = ({children}: {children: ReactNode}) => { 
    // vai ter os produtos que vai ser renderizado no carinho
    const [products, setProducts] = useState<CartProduct[]>([]);

    const subTotal = useMemo(() => {
        return products.reduce((acc, product) => {
            return acc + Number(product.preco) * product.quantityItem;
        }, 0);
    }, [products]);

    const total = useMemo(() => {
        return products.reduce((acc, product) => {
            console.log(product.preco *2);
            return acc + product.preco * product.quantityItem;
        }, 0);
    }, [products]);

    const addProductToCart = (product: any) => {

        const productIsAlreadyOnCart = products.some((cartProduct) => cartProduct.sku === product.sku);
        if(productIsAlreadyOnCart) {
            setProducts((prev) => {
                return prev.map((cartProduct) => {
                    if (cartProduct.sku === product.sku) {
                        return {
                            ...cartProduct,
                            quantityItem: cartProduct.quantityItem += product.quantityItem
                        };
                    }
                    return cartProduct;
                });
            });
            return;
        }
        // se não, adicione o produto à lista
        setProducts((prev) => [...prev, product]);
    };
    
    const decreaseProductQuantity = (productId: number) => {
    
        setProducts((prev) => 
            prev.map((cartProduct) => {
                if (cartProduct.sku === productId) {
                    return {
                        ...cartProduct,
                        quantityItem: cartProduct.quantityItem - 1,
                    };
                }
                return cartProduct;
            }).filter((cartProduct) => cartProduct.quantityItem > 0));
    };
    
    const increaseProductQuantity = (productId: number) => {
    
        setProducts((prev) => 
            prev.map((cartProduct) => {
                if (cartProduct.sku === productId) {
                    return {
                        ...cartProduct,
                        quantityItem: cartProduct.quantityItem + 1,
                    };
                }
                return cartProduct;
            }).filter((cartProduct) => cartProduct.quantityItem > 0));
    };
    
    const removeProductToCart = (productId: number) => {
        setProducts((prev) => 
            prev.filter((cartProduct) => cartProduct.sku != productId)
        );
    };
    return (
        <CartContext.Provider value={{
            // Define valores para as variaveis do contexto
            products,
            addProductToCart,
            decreaseProductQuantity,
            increaseProductQuantity,
            removeProductToCart,
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0,
            total,
            subTotal,
        }}>
            {children}
        </CartContext.Provider>
    );
};
     
export default CartProvider;
