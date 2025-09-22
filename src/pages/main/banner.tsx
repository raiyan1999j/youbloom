
export default function Banner(){
    return(
        <>
        <section>
            <div className="grid grid-col-2 w-full bannerBg min-h-[595px] bg-cover bg-fixed bg-no-repeat relative -z-10">
                <div className="absolute w-[20%] left-10 top-10">
                    <h2 className="caprasimo text-5xl uppercase text-transparent" style={{WebkitTextStroke:"3px white"}}>
                        vision
                    </h2>
                    <p className="nunito text-white capitalize text-justify">
                        youbloom’s vision is to make live events more accessible and better for all.
                    </p>
                </div>

                <div className="absolute w-[20%] bottom-10 right-[100px]">
                    <h2 className="caprasimo text-5xl uppercase text-transparent" style={{WebkitTextStroke:"3px white"}}>
                        mission
                    </h2>
                    <p className="nunito text-white capitalize text-justify">
                        To create a more equitable and sustainable live events industry by providing a platform that
                        prioritizes the needs of fans, artists, and event creators.
                    </p>
                </div>

                <div className="absolute w-[40%] top-[25%] left-1/2">
                    <h2 className="caprasimo text-5xl uppercase text-transparent" style={{WebkitTextStroke:"3px white"}}>
                        background
                    </h2>
                    <p className="nunito text-white capitalize text-justify">
                        When establishing youbloom, founder Phil Harrington issued shares to over 100 members of his
                        creative community who shared the youbloom vision. youbloom has since grown with the help of
                        its now 200+ shareholders, including original, sweat and cash investors.
                    </p>
                </div>

                <div className="absolute w-[40%] top-[60%] left-10">
                    <h2 className="caprasimo text-5xl uppercase text-transparent" style={{WebkitTextStroke:"3px white"}}>
                        youbloomConnect
                    </h2>
                    <p className="nunito text-white capitalize text-justify">
                        In 2021 youbloomConnect was launched, a platform that allows Show Creators (who can be
                        artists, promoters, and host/venues) to deliver the highest quality live and online music shows
                        and tours.
                    </p>
                </div>
            </div>
        </section>
        </>
    )
}