import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
        setIsLoading(false);
        // getGifs(category) Esta funcion ya se usa en el getImages
        //     .then(newImages => setImages(newImages)) Esto se puede usar en vez de la funcion getImages()
    }, [ ])
    

    return {
        images: images,
        isLoading
    }
}
