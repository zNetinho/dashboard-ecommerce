import React from "react";

export default function BenefitsItem({icon: Icon, text}: any) {
    return (
        <div className="flex items-center text-2xl font-bold w-[250px]">
            <i><Icon size={48}/></i>
            <p>{ text }</p>
        </div>
    );
}
