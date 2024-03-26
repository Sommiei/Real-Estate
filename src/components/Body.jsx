export const Body = ()=>{
    return(
  <>
      <div className="hero min-h-screen bg-[#4CC9F030] ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left py-20 ">
              <p className="text-blue-400">REAL ESTATE</p>
            <h1 className="text-5xl font-bold">Find a perfect <br /> home you love...!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br/>In deleniti eaque aut repudiandae et a id nisi.</p>
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
                <label className="label">
                  <span className="label-text">For sale</span>
                  <span className="label-text">For rent</span>
                </label>
                <input type="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-10">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="w-[100%] h-200px bg-white relative">
        <div className="flex text-center justify-center w-[100] h-100px relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br  from-[#4361EE] to-[#4361EE00] absolute bottom-250px left-[15px] top-5" > </div>
            <p className="mt-20">Trusted by 100+ Companies across the globe! </p>
        </div>
        <div className="flex flex-row items-center justify-center gap-10  w-[100] h-44 py-20 grayscale">
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
            <img src="icon_smart.png" alt="" />
		     </div>

         <div className="">
            <h2 className="card-title">Donec porttitor euismod!</h2>
            <p>Nullam a lacinia ipsum,<br /> nec dignissim purus. Nulla</p>
         </div>
      </div>
    </div>

		


		

  <div className="main-img flex gap-5 flex-end w-[48%]">
       <div className="">
          <img src="/section-three-one.jpg" alt="" loading="lazy" className="rounded-lg h-[450px]" />
       </div>
    
			 <div className="">
					<div className="mb-5">
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