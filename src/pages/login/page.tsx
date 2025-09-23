import { useContext, useEffect, useState, type ChangeEvent } from "react"
import { InfoContainer } from "../../context/contextprovider"
import { useNavigate } from "react-router-dom"

type CodeContainerType = {
    code: number,
    length:number,
    secondLen: number | null
}

type UserInfoType = {
    countryCode: number | null,
    mobileNumber: number | null,
    error: string | null
}

const codeContainer:CodeContainerType[] = [
    {
        code:+1,
        length:10,
        secondLen:null
    },
    {
        code:+44,
        length:10,
        secondLen:null
    },
    {
        code:+254,
        length:9,
        secondLen:null
    },
    {
        code:+91,
        length:10,
        secondLen:null
    },
    {
        code:+880,
        length:10,
        secondLen:null
    },
    {
        code:+92,
        length:10,
        secondLen:null
    },
    {
        code:+61,
        length:9,
        secondLen:null
    },
    {
        code:+49,
        length:10,
        secondLen:11
    },
    {
        code:+33,
        length:9,
        secondLen:null
    },
    {
        code:+39,
        length:9,
        secondLen:10
    },
    {
        code:+81,
        length:10,
        secondLen:null
    }
]

export default function Login(){
    const context = useContext(InfoContainer);

    if(!context) throw new Error("context error");

    const {userLogin,setUserLogin} = context;

    const navigate = useNavigate();
    const [userInfo,setUserInfo] = useState<UserInfoType>({
        countryCode:null,
        mobileNumber: null,
        error: null
    });

    const formHandler=(event: { preventDefault: () => void; })=>{
        event.preventDefault();
        const codeDetails:CodeContainerType = codeContainer.filter((items)=> items.code == userInfo.countryCode)[0];
        const mobileNumLen= (userInfo.mobileNumber)?.toString().length ?? 0;
        const message = codeDetails.secondLen? `mobile number should be within ${codeDetails.length} to ${codeDetails.secondLen} degits`: `mobile number should be ${codeDetails.length} degits`

        if(mobileNumLen < (codeDetails.length || (codeDetails.secondLen ?? 0))){
            setUserInfo(prev=>({...prev,error:message}))
        }else{
            setUserInfo({countryCode:null,mobileNumber:null,error:null});

            setUserLogin(true);
            localStorage.setItem("userLogin","true");
            navigate("/")
        }
    }

    const inputHandler=(event:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const {name,value} = event.target;

        setUserInfo(prev=>({...prev,[name]:value}))
    }

    useEffect(()=>{
        if(userLogin){
            navigate("/")
        }
    },[])
    return(
        <>
        <section className="px-20 mt-[100px]">
            <div className="w-full">
                <div className="flex justify-center items-center">
                    <h1 className="absolute caprasimo text-[120px] text-transparent" style={{WebkitTextStroke:"1px rgba(0,0,0,0.5)"}}>
                        welcome
                    </h1>

                    <h3 className="caprasimo font-bold text-6xl text-black/80">
                        youbloom
                    </h3>
                </div>

                <form onSubmit={formHandler}>
                <div className="mt-20 w-[50%] mx-auto space-y-5">
                    <div>
                        <label htmlFor="mobileNumber" className="nunito font-bold text-black capitalize">
                            provide your mobile number
                        </label>
                    </div>

                    <div className="flex flex-row items-end gap-x-5">
                        <div>
                            <select value={userInfo.countryCode ?? ""} name="countryCode" className="border border-black/50 nunito font-medium text-black/80 p-2.5 rounded-xl nunito text-justify" onChange={inputHandler}>
                                {
                                    codeContainer.map((items,index)=>{
                                        return <option value={items.code} key={index}>
                                            + {items.code}
                                        </option>
                                    })
                                }
                            </select>
                        </div>
                        
                        <div className="h-10 w-[60%]">
                            <input type="text" value={userInfo.mobileNumber ?? ""} id="mobileNumber" name="mobileNumber" className="h-full w-full border-b border-b-black/20 px-2.5 nunito placeholder:text-black/20 focus:outline-none focus:border-b-black/50" placeholder="mobile number" autoComplete="off" onChange={inputHandler}/>
                        </div>
                    </div>
                    
                    <div>
                        {
                            userInfo.error?
                            <span className="nunito font-bold text-black/80 capitalize flex flex-row gap-x-2 items-center">
                            <span className="nunito text-rose-500 font-black text-xl">
                                Error!
                            </span>
                            {userInfo.error}
                        </span>:null
                        }
                        
                    </div>
                    <div className="mt-20 flex w-full justify-center">
                    <button type="submit" className="border border-black/20 px-10 py-2.5 rounded-xl nunito text-black/80 uppercase font-semibold transition-all duration-200 ease-linear hover:bg-black/80 hover:text-white">
                        login
                    </button>
                </div>
                </div>
                </form>
            </div>
        </section>
        </>
    )
}