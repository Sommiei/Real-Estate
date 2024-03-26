export const Body4 =()=>{
    return(
        <>
        <div className="relative w-[100%] mt-20">
            <div className="w-[70px] h-[70px] bg-gradient-to-br  from-[#4361EE] to-[#4361EE00] rounded-full absolute right-[20%] bottom-15"></div>
            <div className=" ">
                <p className="text-center text-xl font-bold text-blue-500 py-2">Introduce yourself to </p>
                <h4 className="text-center text-2xl font-bold text-black">Our Team of Experts</h4>
            </div>
            <div className="flex gap-10 justify-center items-center mt-10 px-14 w-[100%] object-cover ">
            <div className="bg-fit rounded-lg overflow-hidden">
                <img src="human-img.jpg" alt=""className="rounded-tl-full  w-[180px] h-[250px] rounded-tr-lg  object-fit rounded-lg rounded-tr-xl overflow-hidden bg-gradient-to-br  from-[#D9D9D9] to-[#000000] shadow-3xl" />
                <h3 className="text-center font-semi-bold text-2xl">Brendon M</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">CEO & Founder</h4>
            </div>
            <div className="bg-fit rounded-lg overflow-hidden">
                <img src="human-img2.jpg" alt=""className="rounded-tl-full rounded-tr-xl w-[180px] h-[250px] rounded-tr-lg object-fit overflow-hidden bg-gradient-to-br  from-[#D9D9D9] to-[#000000] shadow-3xl" />
                <h3 className="text-center font-semi-bold text-2xl">Brendon M</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">Real Estate Developer</h4>

                
            </div>
            <div className="bg-fit rounded-lg overflow-hidden">
                <img src="human-img3.jpg" alt=""className="rounded-tl-full rounded-tr-xl w-[180px] h-[250px] rounded-tr-lg object-fit rounded-lg overflow-hidden bg-gradient-to-br  from-[#D9D9D9] to-[#000000] shadow-3xl" />
                <h3 className="text-center font-semi-bold text-2xl">Brendon M</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">Listing Agent</h4>

            </div>
            <div className="bg-fit rounded-lg overflow-hidden">
                    <img src="human-img4.jpg" alt=""className="rounded-tr-xl w-[180px] h-[250px]  object-fit  rounded-lg  rounded-tl-full overflow-hidden bg-gradient-to-br  from-[#D9D9D9] to-[#000000] shadow-3xl rounded-br-" />
                    <h3 className="text-center font-semi-bold text-2xl">Brendon M</h3>
                    <h4 className="font-semi-bold text-xl text-blue-700 text-center">Buyer's Agent</h4>

                 </div>
            </div>
        </div>
        </>
    )
}