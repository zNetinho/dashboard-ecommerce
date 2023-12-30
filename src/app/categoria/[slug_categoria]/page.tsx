"use serve";
import GridProducts from "@components/components/pages/Categorie/Grid";
import { fetchCategorie } from "@components/services/category/functions";
import { listProducts } from "@components/services/products/functions";
import type { Metadata, ResolvingMetadata } from "next";
import PageNotFound from "../../not-found";
import { redirect } from "next/navigation";

type Props = {
    params: { slug_categoria: string }
}

export async function generateMetadata(
    { params, }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    const slug = params.slug_categoria;
    const categoria = await fetchCategorie(slug);
    console.log(categoria);
    if( categoria !== undefined ) {
        console.log(categoria);
        return {
            title: categoria.title_seo || "",
            description: categoria.descricao_seo,
            category: categoria.nome,
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
                canonical: `http://localhost:3000/${slug}`,
            },
        };
    } else {
        redirect("/404");
    }

    
}
    
export default async function Categoria({ params }: any) {
    const { slug_categoria } = params;
    const { categoria } = await fetchCategorie(slug_categoria);
    console.log(categoria);
    // substituir para a rota que carrega somente os produtos da categoria /categorias/products
    const productsList = await listProducts();
    const products: any = [];
    if( productsList ) {
        for (let index = 0; index < productsList.length; index++) {
            const product = productsList[index];
            console.log(product);
            if(product.categoria === categoria.nome) {
                products.push(product);
            }
        }
    } else {
        return null;
    }
    if( categoria.title_seo !== undefined  && categoria.nome !== undefined) {
        return (
            <div>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold mx-5">{ categoria?.nome }</h1>
                </div>
                <div>
                    
                </div>
                <div className="flex mt-5 py-10">
                    <GridProducts 
                    // pode receber junto o filtro
                        products={products}
                    />
                </div>
            </div>
        );
    } else {
        <PageNotFound />;
    }
}
