export const Body2 =()=>{
    return(
        <>
      <div className="flex w-[100]col gap-20 w[300px] mt-20">
        <div className="fonts flex-start px-10">
            <p className="text-l text-blue-500 font-ibold">CHECKOUT OUR NEW</p>
            <h3 className="text-3xl text-black font-semibold">Latest Listed Properties</h3>
            <p className="text-sm">Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. </p>
        </div>
        <div className="flex gap-5 w[400px] ">
        <button className="btn w-[70] h-[40] bg-white rounded-3xl border-blue-500 ">All</button>
        <button className="btn btn-active bg-blue-500 rounded-3xl  ">Rent</button>
        <button className="btn btn-active bg-white rounded-3xl border-blue-500 ">Sell</button>
        </div>
      </div> 
      <div className="flex py-10 px-10 w-full gap-10">
        <div className=" ">
          <img src="body2-img1.png" alt="" className="rounded-2xl"/> 
          <img src="body2-img1-fire.png" />
        </div>
        <div >
          <img src="body2-img2.png" alt="" className="rounded-2xl" />
        </div>
        <div >
          <img src="body2-img3.png" alt="" className="rounded-2xl" />
        </div>
        <div className="w-[340px] h-[340px]">
          <img src="body2-img1.png" alt="" className="rounded-2xl" />
        </div>

      </div>

      <div className=" w-[100%] bg-base-300 px-20 py-20" >

        <div className="text-center items-center w-full mb-10">
        <h4 className="text-sm ">OUR SERVICES</h4>
        <h2 className="text-xl font-bold">Donec porttitor euismod dignissim</h2>
        </div>
        <div className="flex items-center justify-center gap-10 ">
          <div className="w-[320px] h-[340px] flex flex-col gap-5 bg-white rounded-2xl justify-center items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-[#4361EE] flex justify-center items-center">
          <svg className="w-6 h-6 text-white  dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
             <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
          </svg>
          </div>
          <h3 className="text-xl font-bold">Buy a New Home</h3>
          <p className="text-center">Donec porttitor euismod dignissim. <br /> Nullam a lacinia ipsum, <br /> nec dignissim purus. </p>
          </div>
          
          <div className="w-[320px] h-[340px] flex flex-col gap-5 bg-white rounded-2xl justify-center items-center">
             <div className="w-[50px] h-[50px] rounded-full bg-[#4361EE] flex justify-center items-center">
             <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
            </svg>
              </div>
              <h3 className="text-xl font-bold">Sell a House</h3>
              <p className="text-center">Donec porttitor euismod dignissim. <br /> Nullam a lacinia ipsum, <br /> nec dignissim purus. . </p>
          </div>

          <div className="w-[320px] h-[340px] flex flex-col gap-5 bg-white rounded-2xl justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#4361EE] flex justify-center items-center">
             <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
            </svg>
              </div>
              <h3 className="text-xl font-bold">Rent a House</h3>
              <p className="text-center">Donec porttitor euismod dignissim. <br /> Nullam a lacinia ipsum,<br /> nec dignissim purus. </p>
          </div>
          
        </div>
      </div>
      </> 
    )
}