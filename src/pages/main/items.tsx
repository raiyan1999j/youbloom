import { useQuery } from "@tanstack/react-query"
import axios from "axios";
import { useEffect, useState } from "react";
import { LuImageOff } from "react-icons/lu";
import ImageValidation from "./imgvalidation";

type DataLimitaion = {
    currentPage: number,
    start: number,
    limit: number,
    totalPage: number | null
}

type PaginationType = {
    firstPhase: number[],
    middlePhase: number[],
    lastPhase: number[]
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
    const [dataLimitation,setLimitation] = useState<DataLimitaion>({
        currentPage:1,
        start:0,
        limit:10,
        totalPage:null
    });

    const [pagination,setPagination] = useState<PaginationType>({
        firstPhase:[],
        middlePhase:[],
        lastPhase:[]
    });

    const {isLoading,isError,data} = useQuery<UserData>({
        queryKey:["userData"],
        queryFn:async ()=>{
            const getData = await axios(`https://jsonplaceholder.typicode.com/photos?_page=1&_start=${dataLimitation.start}&_limit=${dataLimitation.limit}`);
            let wrap;

            const totalData= Number(getData.headers["x-total-count"] || 0);

            const data = getData.data;

            wrap = {totalData,data};

            return wrap;
        }
    });

    

    useEffect(()=>{
        if(data){
            const totalPage = Math.ceil((data.totalData)/dataLimitation.limit);
            const division = Math.ceil(totalPage/3);
            const firstPhase= [...Array(4)].map((_,index)=>index+1);
            const middlePhase=[...Array(4)].map((_,index)=>index+division);
            const lastPhase = [...Array(4)].map((_,index)=>totalPage-index).reverse();
            
            setPagination({firstPhase,middlePhase,lastPhase});
        }
    },[data]);
    return(
        <>
        <section className="mt-20">
            <div className="w-[50%] mx-auto h-10">
                <input type="text" name="search" placeholder="Search" className="nunito text-black/80 font-bold h-full w-full bg-gray-300/40 rounded-xl px-5 nunito placeholder:text-black/20 focus:outline-none focus:border-gray-400 focus:border" />
            </div>
        </section>

        <section className="px-20 mt-20">
            <div className="grid grid-cols-3 gap-x-5 gap-y-[60px] px-10 py-10 h-[500px] overflow-y-scroll sideScrollbar">
                {
                    data?.data.map((items,index)=>{
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
                                <button type="button" className="px-2.5 py-1.5 bg-sky-400 rounded-xl nunito text-white font-bold capitalize transition-all duration-150 ease-linear hover:bg-sky-600">
                                    details
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </section>

        <section className="px-20 mt-20">
            <div className="flex flex-row justify-end w-full">
                <div className="flex flex-row gap-x-5">
                    {
                        pagination.firstPhase.map((items,index)=>{
                            return <button className="nunito px-2.5 py-1.5 flex justify-center items-center border border-black/20 rounded-lg transition-all duration-150 ease-linear hover:bg-black/20 hover:text-white hover:cursor-pointer" key={index}>
                                {items}
                            </button>
                        })
                    }
                </div>
                <div className="flex flex-row gap-x-2.5 nunito text-black/80 items-end mx-2.5">
                    {
                        [...Array(6)].map((_,index)=>{
                            return <span key={index}>.</span>
                        })
                    }
                </div>
                <div className="flex flex-row gap-x-5">
                    {pagination.middlePhase.map((items,index)=>{
                        return <button className="nunito px-2.5 py-1.5 flex justify-center items-center border border-black/20 rounded-lg transition-all duration-150 ease-linear hover:bg-black/20 hover:text-white hover:cursor-pointer" key={index}>
                            {items}
                        </button>
                    })}
                </div>
                <div className="flex flex-row gap-x-2.5 nunito text-black/80 items-end mx-2.5">
                    {
                        [...Array(6)].map((_,index)=>{
                            return <span key={index}>.</span>
                        })
                    }
                </div>
                <div className="flex flex-row gap-x-5">
                    {pagination.lastPhase.map((items,index)=>{
                        return <button className="nunito px-2.5 py-1.5 flex justify-center items-center border border-black/20 rounded-lg transition-all duration-150 ease-linear hover:bg-black/20 hover:text-white hover:cursor-pointer" key={index}>
                            {items}
                        </button>
                    })}
                </div>
            </div>
        </section>
        </>
    )
}