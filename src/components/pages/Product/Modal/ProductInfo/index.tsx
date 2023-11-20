"use client";
import PurchaseButton from "@components/components/PurchaseButton";
import ProductPrice from "../../ProductPrice";
import Thumbnails from "../../Thumbnail";
import DescriptionProduct from "../../description";
import { useContext, useState } from "react";
import { CartContext } from "@components/providers/Cart";
import { Button } from "@components/components/ui/button";
import ButtonAddToCart from "@components/components/Cart/ButtonAddToCart";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
// vai receber nome, preço, descrição

const images = [
    "https://radio93fm.com.br/wp-content/uploads/2019/02/produto.png",
    "https://radio93fm.com.br/wp-content/uploads/2023/07/marketing-digital.webp",
    "https://radio93fm.com.br/wp-content/uploads/2023/06/importancia-das-arvores-equilibrio-ecologico-300x148.png",
    "https://radio93fm.com.br/wp-content/uploads/2023/06/creme-de-cebola.webp"
];



export default function ProductInfo({product}: any) {

    const [quantityItem, setQuantityItem] = useState(1);

    const handleDecreaseQuantityClick = () => {
        setQuantityItem((prev) => (prev === 1 ? prev : prev - 1));
    };
    
    const handleIncreaseQuantityClick = () => {
        setQuantityItem((prev) =>  prev + 1);
    };

    const { addProductToCart } = useContext(CartContext);
    const handleAddToCart = () => {
        addProductToCart({ ...product, quantityItem });
    };

    return (
        // Nome do produto, preço, descrição, imagem, e sku
        <div className="p-10 w-full">
            <div className="flex gap-2">
                <div className="flex flex-row gap-4">
                    {/* Imagens */}
                    <div className="flex flex-row">
                        <Thumbnails 
                            photos={images}
                        />
                    </div>
                </div>
                <div>
                    {/* Informações */}
                    <h1 className="text-3xl font-bold mx-2">{product.nome}</h1>
                    <span className="text-gray-500 ml-2 my-4">COD. {product.sku}</span>
                    <div className="py-4 px-2">
                        <ProductPrice 
                            preco={product.preco}
                        />
                    </div>
                    <DescriptionProduct
                        description={product.descricao}
                    />

                    <div className="flex items-center gap-2 mt-4">
                        <Button size="icon" variant="outline" onClick={handleDecreaseQuantityClick}>
                            <ArrowLeftIcon size={16}/>
                        </Button>
                        <span>{quantityItem}</span>
                        <Button size="icon" variant="outline" onClick={handleIncreaseQuantityClick}>
                            <ArrowRightIcon size={16}/>
                        </Button>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                        <div className="w-full mt-10">
                            <PurchaseButton 
                            />
                        </div>
                        <div>
                            <ButtonAddToCart onClick={handleAddToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
