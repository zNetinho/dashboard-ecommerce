import React from "react";
import Link from "next/link";

interface LinkComponentProps {
  href: string;
  title: string;
  anchor: React.ReactNode;
}

export default function LinkComponent({href, anchor}: LinkComponentProps) {
    return (
        <Link 
            href={href}
            title={`${anchor}`}
            className='font-bold text-purple-600 hover:text-purple-800'
        >
            {anchor}
        </Link>
    );
}
