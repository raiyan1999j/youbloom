import { useContext } from "react"
import { FaHome } from "react-icons/fa"
import { MdExitToApp } from "react-icons/md"
import { NavLink, useLocation } from "react-router-dom"
import { InfoContainer } from "../context/contextprovider"

type PagesType = {
    link:string,
    title:string,
    icon:React.ReactNode
}

const pages:PagesType[] = [
    {
        link:"/",
        title:"main",
        icon:<FaHome />
    },
]

export default function Sidebar(){
    const context = useContext(InfoContainer);

    if(!context) throw new Error("context error");

    const {setUserLogin} = context;
    const location = useLocation();

    const logoutUser=()=>{
        setUserLogin(false);

        localStorage.setItem("userLogin","false");
    }

    console.log(location)
    return(
        <>
        <div className="flex flex-col justify-center gap-y-10 fixed xl:top-[25%] top-[40%] right-[2%] h-1/2 px-2.5 before:absolute before:content-'' before:h-full before:w-[2px] before:bg-black before:right-[50%]">
            {
                pages.map((items,index)=>{
                    return <NavLink className={`h-10 w-10 rounded-full border border-black flex justify-center items-center z-40 bg-white transition-all duration-150 ease-linear hover:bg-black hover:text-white`} to={items.link} key={index}>
                        {items.icon}
                    </NavLink>
                })
            }

            {
                location.pathname !== "/login" &&
                <button className={`h-10 w-10 rounded-full border border-black flex justify-center items-center z-40 bg-white transition-all duration-150 ease-linear hover:bg-black hover:text-white`} onClick={logoutUser}>
                    <MdExitToApp />
                </button>
            }
        </div>
        </>
    )
}