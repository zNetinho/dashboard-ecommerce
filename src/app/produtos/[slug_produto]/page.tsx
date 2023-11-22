import ProductInfo from "@components/components/pages/Product/Modal/ProductInfo";
import { fetchProduct } from "@components/services/products/functions";
import { Metadata, ResolvingMetadata } from "next";
import { NextSeo } from "next-seo";

type Props = {
    params: { slug_produto: string }
}

export async function generateMetadata(
    { params, }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug_produto;
    const produto = await fetchProduct(slug);
    return {
        title: produto.title_seo,
        description: produto.description_seo,
        robots: {
            index: true,
            follow: true,
            nocache: true,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
        alternates: {
            canonical: `http://localhost:3000/produtos/${slug}`,
        },

    };
}



export default async function Produto({params}: any ) {
    const slug = params.slug_produto;
    const produto = await fetchProduct(slug);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: produto.nome,
        image: produto.img,
        description: produto.descricao
    };

    return (
        <>  
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
            />

            <div className="flex flex-col">
                <div className="w-full flex flex-col items-center justify-center m-auto py-5">
                    <ProductInfo
                        product={produto}
                    />
                </div>
            </div>  
        </>
    );
}
