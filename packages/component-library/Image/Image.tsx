import React, { useCallback, useState } from "react";
import './Image.css';

export interface IImage {
    src?: string,
    alt?: string,
    fallback?: string
    maxWidth?: string
}

export const FALLBACK_IMAGE = "https://placekitten.com/640/360";
export const FALLBACK_ALT = "image placeholder";

export const Image = ({ src, alt, fallback=FALLBACK_IMAGE, maxWidth='300px' }: IImage) => {
    const [ isError, setIsError ] = useState(false);
    const [ display, setDisplay ] = useState(false);

    const handleError = useCallback(() => {
        setIsError(true);
    }, []);

    const handleLoad = useCallback(() => {
        setDisplay(true);
    }, []);

    return (
        <div className="image-container" style={{maxWidth}}>
            <img 
                style={{maxWidth, opacity: display?1:0}} 
                src={isError?FALLBACK_IMAGE:src} 
                alt={isError?FALLBACK_ALT:alt} 
                onError={handleError} 
                onLoad={handleLoad}/>
        </div>
    );
}