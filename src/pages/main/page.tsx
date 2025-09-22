import { useContext, useEffect } from "react"
import { InfoContainer } from "../../context/contextprovider";
import { useNavigate } from "react-router-dom";
import Banner from "./banner";

export default function Main(){
    const context = useContext(InfoContainer);

    if(!context) throw new Error("context error");

    const {userLogin} = context;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!userLogin){
            navigate("/login")
        }
    },[userLogin])
    return(
        <>
        <Banner/>
        </>
    )
}