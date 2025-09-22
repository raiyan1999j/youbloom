import { FaHome } from "react-icons/fa"
import { MdExitToApp } from "react-icons/md"
import { TbFileDescription } from "react-icons/tb"
import { NavLink } from "react-router-dom"

type PagesType = {
    link:string,
    icon:React.ReactNode
}

const pages:PagesType[] = [
    {
        link:"/main",
        icon:<FaHome />
    },
    {
        link:"/details",
        icon:<TbFileDescription />
    },
    {
        link:"#",
        icon:<MdExitToApp />
    }
]

export default function Sidebar(){
    return(
        <>
        <div className="flex flex-col justify-center gap-y-10 fixed top-[25%] right-[2%] h-1/2 px-2.5 before:absolute before:content-'' before:h-full before:w-[2px] before:bg-black before:right-[50%]">
            {
                pages.map((items,index)=>{
                    return <NavLink className={`h-10 w-10 rounded-full border border-black flex justify-center items-center z-40 bg-white transition-all duration-150 ease-linear hover:bg-black hover:text-white`} to={items.link} key={index}>
                        {items.icon}
                    </NavLink>
                })
            }
        </div>
        </>
    )
}