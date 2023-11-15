import React from "react";
import banner01 from "../../../public/banner-01.png";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div>
            <Image 
                alt="banner da home"
                src={ banner01 }
                width={1600}
                height={300}
            />
        </div>

    );
}
