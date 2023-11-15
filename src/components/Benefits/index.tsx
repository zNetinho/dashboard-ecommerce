import React from "react";
import BenefitsItem from "./BenefitsItems";
import { CreditCard, ShieldCheck, Store, Truck } from "lucide-react";

export default function Benefits() {
    const featureItems = [
        { icon: Truck, text: "Frete Gratis para todo o Brasil" },
        { icon: ShieldCheck, text: "Compra segura" },
        { icon: Store, text: "Desde 2023" },
        { icon: CreditCard, text: "Compras em 10x sem juros" },
        // Adicione mais itens se necessário
    ];
    return (
        <>
            {featureItems.map((item, index) => (
                <BenefitsItem key={index} icon={item.icon} text={item.text} />
            ))}
        </>
    );
}
