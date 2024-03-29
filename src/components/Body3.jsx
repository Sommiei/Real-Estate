export const Body3 =()=>{
    return(
<>
    <div className="flex-col  relative w-[100%] ">
        <div className="w-[50px] h-[50px]  rounded-full left-[50%] absolute bg-gradient-to-br  from-[#4361EE] to-[#4361EE00]">  
        
        </div>
         <div className="text-left py-14 px-52">
           <p className="text-sm text-blue-400 py-5 font-semi-bold ">AREAS ACROSS THE TOWN</p>
           <h3 className="text-xl font-bold">Neighborhood Properties</h3>
          </div>
         <div className="flex items-center justify-center  ">
            <div className="w-[320px] h-[340px] flex bg-white rounded-2xl justify-center items-center relative shadow-black">
                <img src="body2-img1.png" alt="" className="rounded-2xl w-[250px] shadow-gradient-to-br  from-[#FFFFFF] to-[#000000]"/> 
                <div className="absolute center mt-28">
                <h3 className="font-bold text-white text-xl">216</h3>
                <h4 className="font-bold text-white text-xl">New York City, NY</h4>
            </div>
            </div>
            <div className="w-[320px] h-[340px] flex  bg-white rounded-2xl justify-center items-center relative">
                <img src="body2-img1.png" alt="" className="rounded-2xl w-[250px] shadow-gradient-to-br  from-[#FFFFFF] to-[#000000]"/> 
                <div className="absolute center mt-28">
                <h3 className="font-bold text-white text-xl">141</h3>
                <h4 className="font-bold text-white text-xl">Houston Texas, TX</h4>
            </div>
            </div>

            <div className="w-[320px] h-[340px] flex  bg-white rounded-2xl justify-center items-center relative">
                <img src="3rd-body-img.jpg" alt="" className="rounded-2xl w-[400px] h-[250px] shadow-from-[#FFFFFF] to-[#000000]"/> 
                <div className="absolute center mt-28 -ml-20">
                <h3 className="font-bold text-white text-xl">212</h3>
                <h4 className="font-bold text-white text-xl">San Diego,</h4>
            </div>
            </div>
        </div>
    </div>
    <div className="flex flex-row justify-center items-center gap-5 ">
        <div className="flex justify-center items-center relative">
            <img src="second-to-the-last-body3.jpg" alt="" className="rounded-2xl w-[400px] h-[250px]" />
            <div className="absolute center mt-28 -ml-20">
            <h3 className="font-bold text-white text-xl">183</h3>
            <h4 className="font-bold text-white text-xl">Philadelphia, PA</h4>
            </div>
        </div>

        <div className="relative flex justify-center items-center">
            <img src="last-body3-img.jpg" alt=""className="rounded-2xl w-[500px] h-[250px]" />
            <div className="absolute center mt-28 -ml-28 shadow ">
            <h3 className="font-bold text-white text-xl">112</h3>
            <h4 className="font-bold text-white text-xl">San Francisco, CA</h4>
             </div>
        </div>
    </div>
</>
    )
}