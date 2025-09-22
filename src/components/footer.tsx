import { RiFacebookFill } from "react-icons/ri"
import type { SocialLinkType } from "./navbar"
import { BsInstagram } from "react-icons/bs"
import { FaLinkedinIn, FaRegCopyright } from "react-icons/fa6"

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

export default function Footer(){
    return(
        <>
        <section className="mt-[120px] flex flex-row justify-between items-center px-10 w-full relative before:absolute before:top-0 before:h-[5px] before:w-[20%] before:left-1/2 before:-translate-x-1/2 before:bg-black/20 before:rounded-xl py-10">
            <div>
                <h3 className="caprasimo text-[50px] text-transparent" style={{WebkitTextStroke:"2px black"}}>
                    youbloom
                </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-y-5">
                <div className="flex flex-row gap-x-5">
                    {
                        socialLink.map((items,index)=>{
                            return <a href={items.link} target="_blank" className="h-[30px] w-[30px] border-b border-b-black flex justify-center items-center relative overflow-hidden before:absolute before:-z-10 before:w-full before:h-full before:top-full before:transition-all before:duration-200 before:ease-linear hover:before:top-0 hover:rounded-lg hover:text-white hover:before:bg-black hover:border-none" key={index}>
                                {items.icon}
                            </a>
                        })
                    }
                </div>

                <div>
                    <span className="w-full flex flex-row items-center gap-x-2.5 nunito text-black/40">
                        all <span className="text-black/80"><FaRegCopyright /></span> copyright reserved
                    </span>
                </div>
            </div>
        </section>
        </>
    )
}