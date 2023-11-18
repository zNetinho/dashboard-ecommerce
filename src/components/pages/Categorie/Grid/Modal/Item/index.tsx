import ImageComponent from "@components/components/ImageComponent";
import LinkComponent from "@components/components/LinkComponent";
import { Button } from "@components/components/ui/button";
import React from "react";

interface ItemModalProps {
    img: string,
    name: string,
    slug: string,
    preco: number,
}

// Item do Modal de produtos na categoria 
export default function ItemModal({img, name, preco, slug}: ItemModalProps) {
    return (
        <div className="flex flex-col w-[200px] h-[300px] my-5 justify-center items-center border-2 border-gray-400 rounded-lg">
            <div className="py-3">
                <ImageComponent 
                    src={img}
                    alt="teste"
                    height={120}
                    width={150}
                />
            </div>
            <div className="flex flex-col items-center mt-4">
                <p>{name}</p>
                <p>R$ {preco}</p>
            </div>
            <div className="mt-3">
                <Button>
                    <LinkComponent 
                        href={`/produtos/${slug}`}
                        anchor="Comprar"
                        title={name}
                        key={name}
                    />
                </Button>
            </div>
        </div>
    );
}
