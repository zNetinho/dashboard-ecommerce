import React from "react";

export default function DescriptionProduct({description}: any) {
    return (
        <>
            <h2 className="font-bold text-xl text-white">Descrição do produto:</h2>
            <div className="w-full h-[80px] bg-slate-800 rounded-sm my-4">
                <p className="font-semibold text-lg text-gray-300 p-2">
                    {description}
                </p>
            </div>
        </>
    );
}
