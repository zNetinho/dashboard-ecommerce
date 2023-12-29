import Image from "next/image";
import React from "react";

interface ImageComponentProps {
    src: string,
    alt: string,
    width: number,
    height: number,
}

export default function ImageComponent({src, alt, width, height}: ImageComponentProps) {
    return (
        <Image 
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="rounded-md flex object-contain"
        />
    );
}
