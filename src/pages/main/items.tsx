import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useEffect, useState } from "react";
import ImageValidation from "./imgvalidation";
import { BiSolidCategory } from "react-icons/bi";
import Loader from "../../components/ui/loader";
import Error from "../../components/ui/error";
import { useNavigate } from "react-router-dom";

type DataLimitaion = {
    currentPage: number,
    start: number,
    limit: number,
    totalPage: number | null
}

type UserData = {
    totalData : number,
    data: DataType[]
}

type DataType = {
    albumId: number | null,
    id: number | null,
    title: string | null,
    url: string | null,
    thumbnailUrl: string | null
}

export default function Items(){
    const navigate = useNavigate();

    const [dataLimitation,setLimitation] = useState<DataLimitaion>({
        currentPage:1,
        start:0,
        limit:10,
        totalPage:null
    });

    const [searchInput,setSearchInput] = useState<string>("");

    const {isLoading,isError,data} = useQuery<UserData>({
        queryKey:["userData",dataLimitation.limit,dataLimitation.start,searchInput],
        queryFn:async ()=>{
            const getData = await axios(`https://jsonplaceholder.typicode.com/photos?_start=${dataLimitation.start}&_limit=${dataLimitation.limit}&q=${searchInput}`);
            let wrap;

            const totalData= Number(getData.headers["x-total-count"] || 0);

            const data = getData.data;

            wrap = {totalData,data};

            return wrap;
        }
    });

    const pagination=(totalPages:number,currentPage:number)=>{
        const pages = [];

        for(let i=1; i<= Math.min(4,totalPages);i++){
            pages.push(i)
        }

        let start = Math.max(currentPage-1,5);
        let end = Math.min(currentPage+2, totalPages-4);

        if(start > 5) pages.push("...");
        for(let i = start; i <= end; i++){
            pages.push(i)
        }

        if(end < totalPages - 4) pages.push("...");

        for(let i = Math.max(totalPages - 3,5); i<= totalPages; i++){
            if(i > 4) pages.push(i)
        }

        return pages;
    }

    const updateCurrentPage=(currentPage:number)=>{
        const start = (currentPage * dataLimitation.limit) - dataLimitation.limit;

        setLimitation(prev=>({...prev,currentPage,start}));
    }

    useEffect(()=>{
        if(data){
            const totalPage = Math.ceil((data.totalData)/dataLimitation.limit);
            
            setLimitation(prev=>({...prev,totalPage}));
        }
    },[data]);

    const generatePages = pagination(dataLimitation.totalPage??0,dataLimitation.currentPage);

    return( 
        <>
        <section className="mt-20 px-20">
            <div className="xl:w-[50%] w-full mx-auto h-10">
                <input type="text" name="search" value={searchInput??""} placeholder="Search" className="nunito text-black/80 font-bold h-full w-full bg-gray-300/40 rounded-xl px-5 nunito placeholder:text-black/20 focus:outline-none focus:border-gray-400 focus:border" onChange={(event)=>{setSearchInput(event.target.value)}}/>
            </div>
        </section>

        <section className="mt-10 xl:px-20 px-10">
            <div className="flex xl:flex-row items-center gap-x-2.5 xl:justify-end w-full nunito capitalize font-semibold xl:px-10">
                <div>
                    <span className="text-black/80">
                        <BiSolidCategory />
                    </span>
                </div>
                <div>
                    <p>
                        show 
                    </p>
                </div>

                <div>
                    <select value={dataLimitation.limit} className="border-b border-b-black/80" onChange={(event)=>{setLimitation(prev=>({...prev,limit:parseInt(event.target.value)}))}}>
                        {
                            [...Array(10)].map((_,index)=>{
                                return <option value={(index + 1)*10} key={index}>{(index + 1) * 10}</option>
                            })
                        }
                    </select>
                </div>

                <div className="xl:text-base text-sm">
                    <p>
                        data per page
                    </p>
                </div>
            </div>
        </section>

        <section className="xl:px-20 mt-10">
            {
                isLoading?
                <div className="flex justify-center items-center w-full h-[500px]">
                    <Loader/>
                </div>:
                isError?
                <div>
                    <Error/>
                </div>:
                data?
                <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-[60px] px-10 py-10 h-[500px] overflow-y-scroll sideScrollbar">
                {
                    data.data.map((items,index)=>{
                        return <div className="shadow-black/20 shadow-sm rounded-xl space-y-5 transition-all duration-150 ease-linear hover:shadow-black/80" key={index}>
                            <div className="w-full h-[250px] border-b border-black/20 rounded-xl flex justify-center items-center">
                                <ImageValidation imgUrl={items.url}/>
                            </div>
                            <div className="flex flex-row justify-between items-center px-2.5 py-5">
                                <div className="w-[60%]">
                                    <h4 className="nunito text-base capitalize font-semibold">
                                        {items.title}
                                    </h4>
                                </div>

                                <div className="w-[40%] flex justify-end">
                                    <h4 className="caprasimo uppercase">
                                        albumId

                                        <span className="bg-black/80 text-white px-[5px] py-[2px] rounded-full mx-2.5">
                                            {items.albumId}
                                        </span>
                                    </h4>
                                    
                                </div>
                            </div>

                            <div className="flex justify-end px-2.5 py-5">
                                <button type="button" className="px-2.5 py-1.5 bg-sky-400 rounded-xl nunito text-white font-bold capitalize transition-all duration-150 ease-linear hover:bg-sky-600" onClick={()=>{navigate(`/details/${items.id}`)}}>
                                    details
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>:
            null
            }
            
        </section>

        <section className="xl:px-20 md:px-20 px-10">
            <div className="flex flex-row xl:flex-nowrap flex-wrap xl:justify-end md:justify-end items-end xl:gap-x-5 gap-y-5 gap-x-2.5 w-full xl:px-10">
                {
                    generatePages.map((items,index)=>{
                        return items === "..."?
                        <span className="nunito" key={index}>
                            ...
                        </span>:
                        <button className={`nunito py-1.5 px-2.5 rounded-lg border border-black/20 ${dataLimitation.currentPage === items?"bg-black/20 text-white":"bg-transparent text-black/80"} transition-all duration-150 ease-linear hover:cursor-pointer hover:bg-black/20 hover:text-white`} key={index} onClick={()=>{updateCurrentPage(Number(items))}}>
                        {items}
                        </button>
                    })
                }
            </div>
        </section>
        </>
    )
}