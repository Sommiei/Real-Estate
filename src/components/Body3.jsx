export const Body3 =()=>{
    return(
<>
    <div className="flex-col  relative w-[100%]">
        <div className="w-[50px] h-[50px]  rounded-full left-[50%] absolute bg-gradient-to-br  from-[#4361EE] to-[#4361EE00]">  
        
        </div>
         <div className="text-left py-14 px-52">
           <p className="text-sm text-blue-400 py-5 font-semi-bold ">AREAS ACROSS THE TOWN</p>
           <h3 className="text-xl font-bold">Neighborhood Properties</h3>
          </div>
         <div className="flex items-center justify-center">
            <div className="w-[320px] h-[340px] flex bg-white rounded-2xl justify-center items-center">
                <img src="body2-img1.png" alt="" className="rounded-2xl w-[250px]"/> 
            </div>
            <div className="w-[320px] h-[340px] flex  bg-white rounded-2xl justify-center items-center">
                <img src="body2-img1.png" alt="" className="rounded-2xl w-[250px]"/> 
            </div>
            <div className="w-[320px] h-[340px] flex  bg-white rounded-2xl justify-center items-center">
                <img src="3rd-body-img.jpg" alt="" className="rounded-2xl w-[400px] h-[250px]"/> 
            </div>
        </div>
    </div>
    <div className="flex justify-center items-center ">
        <div className="flex flex-row justify-center items-center gap-5">
            <img src="second-to-the-last-body3.jpg" alt="" className="rounded-2xl w-[400px] h-[250px]" />
            <img src="last-body3-img.jpg" alt=""className="rounded-2xl w-[500px] h-[250px]" />
        </div>
    </div>
</>
    )
}