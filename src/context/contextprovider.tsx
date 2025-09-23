import { createContext, useEffect, useState, type ReactNode } from "react";

type PropTypes = {
    children: ReactNode
}

type ContextType = {
    userLogin: boolean | null,
    setUserLogin: React.Dispatch<React.SetStateAction<boolean|null>>
}

export const InfoContainer = createContext<ContextType|null>(null);

export default function ContextProvider({children}:PropTypes){
    const [userLogin,setUserLogin] = useState<boolean|null>(null);

    const value = {userLogin,setUserLogin};

    useEffect(()=>{
        const getItem = localStorage.getItem("userLogin");

        if(getItem === "true"){
            setUserLogin(true)
        }else{
            localStorage.setItem("userLogin","false");
            setUserLogin(false);
        }
    },[]);
    return(
        <>
        <InfoContainer.Provider value={value}>
            {children}
        </InfoContainer.Provider>
        </>
    )
}