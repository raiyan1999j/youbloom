import { createContext, useState, type ReactNode } from "react";

type PropTypes = {
    children: ReactNode
}

type ContextType = {
    userLogin: boolean,
    setUserLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const InfoContainer = createContext<ContextType|null>(null);

export default function ContextProvider({children}:PropTypes){
    const [userLogin,setUserLogin] = useState<boolean>(false);

    const value = {userLogin,setUserLogin};
    return(
        <>
        <InfoContainer.Provider value={value}>
            {children}
        </InfoContainer.Provider>
        </>
    )
}