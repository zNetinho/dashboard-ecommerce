import { Product } from "@components/types/Product/Product";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
}

const computeProductTotalPrice = (product: Product): ProductWithTotalPrice => {
    // if( product.de === 0) {
    //     return {
    //         ...product,
    //         totalPrice: Number(product.basePrice)
    //     };
    // }

    // const totalDiscount = Number(product.basePrice) * (product.discountPercent / 100);

    return {
        ...product,
        totalPrice: Number(product.preco),
    };
};
 
export default computeProductTotalPrice;