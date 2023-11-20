import { Button } from "@components/components/ui/button";

export default function ButtonAddToCart({onClick}: any) {

    return (
        <>
            <Button className=" w-full mt-8 uppercase font-bold" onClick={onClick}>
                Adicionar ao carrinho
            </Button>
        </>
    );
}
