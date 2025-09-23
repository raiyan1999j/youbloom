import { useState } from "react"
import { LuImageOff } from "react-icons/lu";

type ImgUrlType = {
    imgUrl : string | null
}

export default function ImageValidation({imgUrl}:ImgUrlType){
    const [imgError,setImgError] = useState(false);
    
    if(!imgUrl || imgError){
        return (
            <span className="text-8xl text-black/50">
                <LuImageOff />
            </span>
        )
    }

    return(
        <>
        <img src={imgUrl??""} alt="image" onError={()=>setImgError(true)}/>
        </>
    )
}