import ImageComponent from "@components/components/ImageComponent";
import LinkComponent from "@components/components/LinkComponent";
import { Button } from "@components/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@components/components/ui/card";
interface ItemModalProps {
    img: string,
    name: string,
    slug: string,
    preco: number,
}

// Item do Modal de produtos na categoria 
export default function ItemModal({img, name, preco, slug}: ItemModalProps) {
    
    return (
        <Card className="flex flex-col w-[290px] h-[400px] justify-center items-center border-2 border-gray-400 rounded-lg">
            <CardHeader>
                <CardTitle>{name}</CardTitle> 
            </CardHeader>
            <CardContent>
                <div className="py-2">
                    <ImageComponent 
                        src={img}
                        alt="teste"
                        height={200}
                        width={230}
                    />
                </div>
            </CardContent>
            <p className="font-semibold text-lg text-center mb-2">R$ {preco}</p>
            <CardFooter className="flex justify-between">
                <Button className="mt-8 uppercase font-bold">
                    <LinkComponent
                        href={`/produtos/${slug}`}
                    >
                        Ver produto
                    </LinkComponent>
                </Button>
            </CardFooter>
        </Card>
    );
}
