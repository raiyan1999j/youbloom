
export default function Login(){
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

                <form>
                <div className="mt-20 w-[50%] mx-auto space-y-5">
                    <div>
                        <label htmlFor="mobileNumber" className="nunito font-bold text-black capitalize">
                            provide your mobile number
                        </label>
                    </div>

                    <div className="flex flex-row items-end gap-x-5">
                        <div>
                            <select name="countryCode" className="border border-black/50 nunito font-medium text-black/80 p-2.5 rounded-xl">
                                <option value="">+880</option>
                            </select>
                        </div>
                        
                        <div className="h-10 w-[60%]">
                            <input type="text" id="mobileNumber" name="mobileNumber" className="h-full w-full border-b border-b-black/20 px-2.5 nunito placeholder:text-black/20 focus:outline-none focus:border-b-black/50" placeholder="mobile number"/>
                        </div>
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