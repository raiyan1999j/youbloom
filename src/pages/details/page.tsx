import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../components/ui/loader";
import Error from "../../components/ui/error";

export default function Details(){
    const {id} = useParams<{id:string}>();
    const navigate = useNavigate();

    const {isLoading,isError,data} = useQuery({
        queryKey:["detailsData"],
        queryFn:async()=>{
            const getData = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
            const response= getData.data;

            if(!response.length || !response[0].title){
                return null;
            }

            return {
                title: response[0].title,
                body: response.map((items: { body: string; })=>items.body)
            }
        }
    });

    return(
        <>
        <section className="px-20 mt-20">
            {
                isLoading?
                <div className="h-[250px] w-full flex justify-center items-center">
                    <Loader/>
                </div>:
                isError?
                <Error/>:
                data?
                <div className="flex flex-col w-full gap-y-20">
                    <div className="flex items-center justify-center xl:w-[50%] mx-auto text-center">
                        <h1 className="caprasimo xl:text-5xl text-2xl capitalize text-black">
                            {data?.title ?? "no data found"}
                        </h1>
                        <h2 className="caprasimo xl:text-[140px] text-6xl absolute text-transparent tracking-wider" style={{WebkitTextStroke:"1px rgba(0,0,0,0.4)"}}>
                            Headings
                        </h2>
                    </div>

                    <div>
                    <ul className="flex flex-col gap-y-5 list-disc w-[80%] mx-auto">
                        {
                            data.body.map((items:string,index:number)=>{
                                return <li className="nunito text-base font-bold" key={index}>
                                    {items}
                                </li>
                            })
                        }
                    </ul>
                    </div>
                </div>:
                <div className="flex flex-col gap-y-20">
                    <div className="flex items-center justify-center w-[50%] mx-auto text-center">
                        <h1 className="caprasimo text-5xl capitalize text-black">
                            no data found
                        </h1>
                        <h2 className="caprasimo text-[140px] absolute text-transparent tracking-wider" style={{WebkitTextStroke:"1px rgba(0,0,0,0.4)"}}>
                            warning!
                        </h2>
                    </div>

                    <div className="text-center">
                        <p className="nunito text-2xl tracking-wider font-bold text-rose-500 capitalize">
                            the user have no post yet!
                        </p>
                    </div>
                </div>
            }
        </section>

        <section className="px-20 mt-20">
            <div className="flex flex-row justify-end w-[80%] mx-auto">
                <button className="nunito text-white uppercase font-bold px-3.5 py-2 rounded-xl transition-all duration-150 ease-linear bg-sky-300 hover:bg-sky-500" onClick={()=>{navigate(-1)}}>
                    go back
                </button>
            </div>
        </section>  
        </>
    )
}