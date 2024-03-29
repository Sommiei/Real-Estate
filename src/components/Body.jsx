import React, {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css'




export const Body=()=>{
    useEffect(() => {
        AOS.init({
            duration: 1000,

        });
    },[])
    return(
  <>
      <div className="hero min-h-screen bg-[#4CC9F030] px-10">
        <div className="hero-content flex-col lg:flex-row auto">
          <div className="text-center lg:text-left py-20 relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br  from-[#4361EE] to-[#4361EE00] absolute  right-[20%] bottom-[50%] ">

            </div>
              <p className="text-blue-400">REAL ESTATE</p>
            <h1 className="text-5xl font-bold">Find a perfect <br /> home you love...!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <div className="carousel w-[30.25rem] h-[16.875rem] flex items-start">
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full  h-full">
          <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full  h-full">
          <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="rounded-xl" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

          </div>
          <div className="card shrink h-full max-h-screen  w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label border-b-[2px] border-grey mb-5">
                  <span className="label-text border-b[3px] border-[#03AEFD] ">For sale</span>
                  <span className="label-text border-b[3px] border-[#03AEFD]">For rent</span>
                </label>
                <input type="text"placeholder="New York, San Francisco, etc" className="input input-bordered bg-[#D4D4D4]" required />
              </div>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text"></span>
                  </label>
                  <select className="select select-bordered bg-[#D4D4D4]" required>
                    <option value="">Select Property Type</option>
                    <option value="residential">Residential</option>
                    <option value="commercial">Commercial</option>
                    <option value="semi-residential">Semi-Residential</option>
                  </select>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"></span>
                    </label>
                    <select className="select select-bordered bg-[#D4D4D4]" required>
                      <option value="">Select Rooms</option>
                      <option value="premium">premium</option>
                      <option value="standard">standard</option>
                      <option value="deluxe">deluxe</option>
                    </select>
                  </div>
                  <div className="flex justify-left items-start mt-5 gap-3">
                    <img src="icon-setting.png" alt="" />
                    <h4 className="text-sm text-[#03AEFD] font-bold">Advance Search</h4>
                  </div>
                 </div>
              <div className="form-control mt-10 flex justify-center items-center">
                <button className="bg-[#03AEFD] w-[300px] h-[50px] rounded-3xl justify-center items-center flex gap-2">
                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                </svg>
                <h4 className="text-sm font-bold text-white">Search</h4>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      
          
  
     




      <div className="w-[100%] h-200px bg-white relative px-10">
      <div className="absolute w-[350px] h-[70px] bg-white shadow-2xl rounded-full flex items-center justify-center
       left-72 -top-10">
         <img src="Group-21.png" alt="" />
         </div>
         <div className="absolute w-[350px] h-[70px] bg-white shadow-2xl rounded-full flex items-center justify-center
         right-64 -top-10">
          <img src="Group-45.png" alt="" />
         </div>

        <div className="flex text-center justify-center w-[100] h-100px relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br  from-[#4361EE] to-[#4361EE00] absolute bottom-250px left-[15px] top-5" > </div>
            <p className="mt-24">Trusted by 100+ Companies across the globe! </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-10  w-[100] h-44 py-20 grayscale"data-aos="zoom-in-left">
          <img src="image1.png" alt="" className="" />
          <img src="image2.png" alt="" />
          <img src="image3.png" alt="" />
          <img src="image4.png" alt="" />
          <img src="image5.png" alt="" />
          <img src="image6.png" alt="" />
        </div>
      </div>
   


  <div className=" flex justify-around px-10 mb-0 mt-20">
    <div className="donec w-[48%]">

      <div className="texts1  px-5 ">
        <p className="text-2xl text-blue-400">WHO ARE WE</p>
        <h3 className="text-4xl text-black font-bold">Assisting individuals in <br />locating the appropriate <br />real estate.</h3>
      </div>

      <div className="card-body w-[70%] rounded-lg mt-10 flex flex-row gap-5 shadow-lg  items-center bg-white ">
	       <div>
            <img src="icon_smart.png" alt="" />
		     </div>

         <div className="">
            <h2 className="card-title">Donec porttitor euismod!</h2>
            <p>Nullam a lacinia ipsum,<br /> nec dignissim purus. Nulla</p>
         </div>
      </div>
			<div className="card-body w-[70%] rounded-lg mt-10 flex flex-row gap-5 shadow-lg  items-center bg-white ">
	       <div>
            <img src="public/icon-user.png" alt="" />
		     </div>

         <div className="">
            <h2 className="card-title">Donec porttitor euismod!</h2>
            <p>Nullam a lacinia ipsum,<br /> nec dignissim purus. Nulla</p>
         </div>
      </div>
    </div>

		


		

  <div className="main-img flex gap-5 flex-end w-[48%]">
       <div className="rounded-xl" style={{
        backgroundImage: 'url(/section-three-one.jpg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '800px',
        height: '500px'
       }}>
          {/* <img src="/section-three-one.jpg" alt="" loading="lazy" className="rounded-lg h-[450px]" /> */}
       </div>
    
			 <div className="relative">
        <div className="absolute -top-20 -left-20">
          <img src="Group-2.png" alt=""className="" />
        </div>
					<div className="mb-10">
						<img src="/section-three-two.jpg" alt="" loading="lazy"className="rounded-lg" />
					</div>
					<div className="">
						<img src="/section-three-three.jpg" alt="" loading="lazy" className="rounded-lg" />
					</div>
			 </div>
  </div>
  </div>

     

   
  </>
   )
}