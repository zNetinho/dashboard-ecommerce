import React from "react";

const links = [
    { link: "Institucional", href: "institucional" },
    { link: "Ajuda", href: "ajuda" },
    { link: "Sobre Nós", href: "sobre-nos" },
    { link: "Entre em contato", href: "contato" },
];

export default function LinksInstitucional() {
    return (
        <ul className="flex flex-col gap-5">
            {links.map((item) => (
                <li key={item.link} className="text-lg">
                    <a href={item.href}>
                        {item.link}
                    </a>
                </li>
            ))}
        </ul>
    );
}
