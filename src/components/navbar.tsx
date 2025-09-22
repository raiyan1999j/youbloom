import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

type SocialLinkType = {
    link:string,
    icon:React.ReactNode
}

const socialLink:SocialLinkType[] = [
    {
        link:"www.facebook.com",
        icon:<RiFacebookFill/>
    },
    {
        link:"www.instagram.com",
        icon:<BsInstagram/>
    },
    {
        link:"www.linkedIn.com",
        icon:<FaLinkedinIn/>
    }
]

export default function Navbar(){
    return(
        <>
        <nav className="w-full h-20 flex items-center border-b border-b-black/20 px-10">
            <div className="flex items-center absolute left-1/2 -translate-x-1/2">
                <h3 className="caprasimo text-[50px] text-transparent" style={{WebkitTextStroke:"2px black"}}>
                    youbloom
                </h3>
            </div>

            <div className="ml-auto flex flex-row items-center gap-x-5">
                <span className="border-b-2 border-b-black">
                    Follow us
                </span>
                {
                    socialLink.map((items,index)=>{
                        return <span className="h-[30px] w-[30px] flex justify-center items-center border border-black/50 rounded-lg transition-all duration-150 ease-linear hover:bg-black/80 hover:text-white" key={index}>
                            <a href={items.link} target="_blank">{items.icon}</a>
                        </span>
                    })
                }
            </div>
        </nav>
        </>
    )
}