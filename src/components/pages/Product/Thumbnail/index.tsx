"use client";
import ImageComponent from "@components/components/ImageComponent";
import React, { useState } from "react";

interface PhotoProps {
    photos: string[]
}

const Thumbnails: React.FC<PhotoProps> = ({ photos }) => {
    const [image, setImage] = useState(photos[0]);

    return (
        <div className="flex flex-row gap-2">
            <ul className="flex flex-col">
                {photos.map((photo, index) => (
                    <li onClick={() => setImage(photo)} key={index} className="mb-4 max-w-24 max-h-20 cursor-pointer">
                        <ImageComponent height={80} width={100} src={photo} alt="teste"/>
                    </li>
                ))}
            </ul>
            <div className="w-[800px] h-[500px] mx-5">
                <ImageComponent 
                    alt=""
                    src={image}
                    height={500}
                    width={800}
                    key={photos[0]}
                />
            </div>
        </div>
    );
};

export default Thumbnails;
