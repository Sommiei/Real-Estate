import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'




export const Body4 =()=>{
    useEffect(() => {
        AOS.init({
            duration: 1000,

        });
    },[])
    return(
        <>
        <div className="relative w-[100%] mt-20 "data-aos='zoom-in-left'>
            <div className="w-[70px] h-[70px] bg-gradient-to-br  from-[#4361EE] to-[#4361EE00] rounded-full absolute right-[20%] bottom-15"></div>
            <div className=" ">
                <p className="text-center text-xl font-bold text-blue-500 py-2">Introduce yourself to </p>
                <h4 className="text-center text-2xl font-bold text-black">Our Team of Experts</h4>
            </div>
        <div className="flex gap-10 justify-center items-center mt-10 px-14 w-[100%] bg-cover ">
            <div className="">
                <div className="w-[200px] h-[280px]">
                    <img src="human-img.jpg" alt=""className="w-full h-full object-cover rounded-tr-[30px] 
                    rounded-tl-[10rem] rounded-br-[30px] rounded-bl-[30px]" />
                </div>
                <h3 className="text-center font-semi-bold text-2xl">Brendon M</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">CEO & Founder</h4>
            </div>

           
            <div className="">
                <div className="w-[200px] h-[280px]">
                    <img src="human-img2.jpg" alt=""className="w-full h-full object-cover rounded-tr-[30px] 
                    rounded-tl-[10rem] rounded-br-[30px] rounded-bl-[30px]" />
                </div>
                <h3 className="text-center font-semi-bold text-2xl">BJodi J. Appleby</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">Real Estate Developer</h4>
            </div>

            
            <div className="">
                <div className="w-[200px] h-[280px]">
                    <img src="human-img3.jpg" alt=""className="w-full h-full object-cover rounded-tr-[30px] 
                    rounded-tl-[10rem] rounded-br-[30px] rounded-bl-[30px]" />
                </div>
                <h3 className="text-center font-semi-bold text-2xl">Justin S. Meza</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">Listing agent</h4>
            </div>


            <div className="">
                <div className="w-[200px] h-[280px]">
                    <img src="human-img4.jpg" alt=""className="w-full h-full object-cover rounded-tr-[30px] 
                    rounded-tl-[10rem] rounded-br-[30px] rounded-bl-[30px]" />
                </div>
                <h3 className="text-center font-semi-bold text-2xl">Susan T. Smith</h3>
                <h4 className="font-semi-bold text-xl text-blue-700 text-center">Listing agent</h4>
            </div>

            </div>
        </div>
        </>
    )
}