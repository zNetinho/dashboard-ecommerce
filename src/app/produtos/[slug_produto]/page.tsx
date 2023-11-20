import Breadcrumb from "@components/components/Breadcrumb";
import BreadcrumbElement from "@components/components/Breadcrumb/Breadcrumb";
import BreadcrumbItem from "@components/components/Breadcrumb/BreadcrumbItem";
import ProductInfo from "@components/components/pages/Product/Modal/ProductInfo";
import { fetchProduct } from "@components/services/products/functions";
import { Metadata, ResolvingMetadata } from "next";

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
    };
}

export default async function Produto({params}: any ) {
    const slug = params.slug_produto;
    const produto = await fetchProduct(slug);
    return (
        <div className="flex flex-col">
            <div className="w-full flex flex-col items-center justify-center m-auto py-5">
                <ProductInfo
                    product={produto}
                />
            </div>
        </div>
    );
}
