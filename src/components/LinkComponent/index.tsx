import React from "react";
import Link from "next/link";

interface LinkComponentProps {
  href: string;
  title?: string;
  children: React.ReactNode;
  className?: string
}

export default function LinkComponent({href, children, className}: LinkComponentProps) {
    return (
        <Link 
            href={href}
            title={`${children}`}
            className={`${className}`}
            passHref
        >
            {children}
        </Link>
    );
}
