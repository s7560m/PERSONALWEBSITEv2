import {useEffect, useState} from "react";

export default function Carousel({images}: {images: string[]}) {
    const [currentImg, setCurrentImg] = useState<string>("");
    useEffect(() => {
        if (images.length) {
            setCurrentImg(images[0]);
        }
    }, [images])
    return <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
        <img src={currentImg} style={{height: 200, width: 200}} />
    </div>
}