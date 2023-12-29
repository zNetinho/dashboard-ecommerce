import ImageComponent from "@components/components/ImageComponent";
import LinkComponent from "@components/components/LinkComponent";
import React from "react";

export default function PageNotFound() {
    return (
        <div className="w-full flex justify-center items-center">
            <ImageComponent 
                src="/astronaut.jpg"
                alt="Uma animação de um astronauto sentado no foguete"
                height={930}
                width={1300}
            />
            <div className="w-[500px] h-[260px] flex flex-col absolute justify-center items-center backdrop-blur rounded-xl">
                <div>
                    <h2 className="text-5xl font-semibold">404</h2>
                </div>
                <div className="flex flex-col mt-6 text-center">
                    <span className="text-xl font-semibold">Parece que a pagina que você tentou acessar não existe !</span>
                    <span className="text-xl font-semibold">Clique no botão abaixo, e vá para à Pagina Inicial</span>
                </div>
                <div className="mt-6">
                    <LinkComponent
                        href="/"
                        className="bg-purple-500 py-2 px-4 rounded-xl"
                    >
                        Pagina inicial
                    </LinkComponent>
                </div>
            </div>
        </div>
    );
}
