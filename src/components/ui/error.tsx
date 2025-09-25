
export default function Error(){
    return(
        <>
        <section className="px-20 mt-20">
            <div className="w-[50%] mx-auto flex flex-col items-center shadow-sm shadow-black/20 py-10 rounded-xl">
                <div>
                    <h1 className="caprasiom text-2xl text-rose-500! capitalize">
                        Something went wrong
                    </h1>
                </div>

                <div className="mt-10">
                    <p className="nunito text-base tracking-widest">
                        Please try again
                    </p>
                </div>

                <div className="mt-10">
                    <button className="px-3.5 py-2 bg-sky-500 rounded-full text-white nunito font-bold capitalize transition-all duration-150 ease-linear hover:bg-sky-800" onClick={()=>window.location.reload()}>
                        reload
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}