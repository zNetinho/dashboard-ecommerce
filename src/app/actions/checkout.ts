
import { CartProduct } from "@components/types/Product/CartProduct";
import Stripe from "stripe";

export const createCheckOut = async (products: CartProduct[]) => {
    const stripe = new Stripe("sk_test_51O49zDETWqIIP9kHnk1wdJUx6nuNcgLPTUG3A9UgKC2JeUrwlqsXA9yUDPy44PdGnNP92nU61BKSsxgcTnoW5vq400HUYYnCeX" ,{
        apiVersion: "2023-10-16",
    });

    const checkOut = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        // se der sucesso redirect para a home
        success_url: "http://localhost:3000",
        cancel_url: "http://localhost:3000",
        line_items: products.map((product) => {
            return {
                price_data: {
                    currency: "brl",
                    product_data: {
                        // dados do produto
                        name: product.nome,
                        images: product.img
                    },
                    // manda o valor do carrinho
                    unit_amount: product.preco * 100,
                },
                quantity: product.quantityItem
            };
        })
    });
    console.log("Chegou no final");
    return checkOut;
}; 