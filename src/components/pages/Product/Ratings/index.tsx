import React, { ReactElement } from "react";
import Star from "./Star";

interface RatingProps {
    rating?: number;
}

export default function Rating({rating}: RatingProps) {
    return (
        <div className="flex mb-3 gap-1">
            <span><Star /></span>
            <span><Star /></span>
            <span><Star /></span>
            <span><Star /></span>
            <span><Star /></span>
        </div>
    );
}
