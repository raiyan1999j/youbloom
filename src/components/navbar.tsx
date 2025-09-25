import { BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiFacebookFill } from "react-icons/ri";

export type SocialLinkType = {
    link:string,
    icon:React.ReactNode
}

const socialLink:SocialLinkType[] = [
    {
        link:"https://www.facebook.com/",
        icon:<RiFacebookFill/>
    },
    {
        link:"https://www.instagram.com/",
        icon:<BsInstagram/>
    },
    {
        link:"https://www.linkedin.com/",
        icon:<FaLinkedinIn/>
    }
]

export default function Navbar(){
    return(
        <>
        <nav className="w-full xl:h-20 py-5 flex xl:flex-row flex-col items-center border-b border-b-black/20 px-10">
            <div className="flex items-center xl:absolute xl:left-1/2 xl:-translate-x-1/2">
                <h3 className="caprasimo text-[50px] text-transparent" style={{WebkitTextStroke:"2px black"}}>
                    youbloom
                </h3>
            </div>

            <div className="xl:ml-auto flex flex-row items-center xl:justify-end justify-center gap-x-5">
                <span className="border-b-2 border-b-black">
                    Follow us
                </span>
                {
                    socialLink.map((items,index)=>{
                        return <a href={items.link} className="h-[30px] w-[30px] flex justify-center items-center border border-black/50 rounded-lg transition-all duration-150 ease-linear hover:bg-black/80 hover:text-white" key={index} target="_blank">
                            {items.icon}
                        </a>
                    })
                }
            </div>
        </nav>
        </>
    )
}