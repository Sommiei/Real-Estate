export const Body2 = () => {
  return (
    <>
      <div className="flex w-[100] col gap-20 mt-20">
  <div className="fonts flex-start px-10">
    <p className="text-l text-blue-500 font-bold">CHECKOUT OUR NEW</p>
    <h3 className="text-3xl text-black font-semibold">
      Latest Listed Properties
    </h3>
    <p className="text-sm">
      Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec
      dignissim purus.
    </p>
  </div>
  <div className="flex gap-5 justify-center items-center w-[400px]">
    <button className="btn w-[70] h-[40] bg-white rounded-3xl border-blue-500">
      All
    </button>
    <button className="btn btn-active bg-blue-500 rounded-3xl">
      Rent
    </button>
    <button className="btn btn-active bg-white rounded-3xl border-blue-500">
      Sell
    </button>
  </div>
</div>


<div className="carousel rounded-box overflow-hidden ml-10 py-24 gap-10 flex">
  <div className="carousel-item object-cover " style={{ minWidth: '300px' }}>
    <div className="flex flex-col items-left relative">
      <img src="body2-img1.png" alt="Burger" />
      <div className="w-[120px] h-[45px] absolute bg-red-200 flex justify-center items-center rounded-full gap-3 bottom-32 left-10 ">
        <img src="public/body2-img1-fire.png" alt="" />
       <p className="text-red-500 text-sm font-bold">popular</p></div>
      <div className="content">
        <h4 className="font-bold text-black">$5,970</h4>
        <p className="font-bold text-black">Tranquil Haven in the Woods</p>
        <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
        <div className="flex flex-row gap-3">
        <img src="vector-4.png" alt="" />
        <p>4 Beds</p>
          <img src="icon-bathroom.png" alt="" />
        <p>3 Bath</p>
        </div>
      </div>
    </div>
  </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <div className="flex flex-col items-left relative ">
      <img src="body2-img2.png" alt="Burger" />
      <div className="w-[130px] h-[45px] absolute bg-[#D7EEFF] flex justify-center items-center rounded-full gap-3 bottom-32 left-10 ">
        <img src="public/Vector-blue-home.png" alt="" />
       <p className="text-blue-500 text-sm font-bold">New Listing</p></div>
      <div className="content">
        <h4 className="font-bold text-black">$ 1,970</h4>
        <p className="font-bold text-black">Serene Retreat by the Lake</p>
        <p className="text-sm">1964 Jehovah Drive, VA 22408</p>
        <div className="flex flex-row gap-3">
        <img src="vector-4.png" alt="" />
        <p>3 Beds</p>
          <img src="icon-bathroom.png" alt="" />
        <p>2 Bath</p>
        </div>
      </div>
    </div>
  </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <div className="flex flex-col items-left relative">
      <img src="body2-img3.png" alt="Burger" />
      <div className="w-[160px] h-[45px] absolute bg-[#F1FFF1] flex justify-center items-center rounded-full gap-3 bottom-32 left-10 ">
        <img src="public/Vector-green-dollar.png" alt="" />
       <p className="text-green-500 text-sm font-bold">Discounted price</p></div>
      <div className="content">
        <h4 className="font-bold text-black">$ 3,450</h4>
        <p className="font-bold text-black">Charming Cottage in the Meadow</p>
        <p className="text-sm">1508 Centennial Farm RoadHarlan, 51537</p>
        <div className="flex flex-row gap-3">
        <img src="vector-4.png" alt="" />
        <p>4 Beds</p>
          <img src="icon-bathroom.png" alt="" />
        <p>4 Bath</p>
        </div>
      </div>
    </div>
  </div>
  {/* Add more carousel items as needed */}
   <div className="carousel-item" style={{ minWidth: '300px' }}>
    <div className="flex flex-col items-left relative">
      <img src="body2-img2.png" alt="Burger" />
      <div className="w-[120px] h-[45px] absolute bg-red-200 flex justify-center items-center rounded-full gap-3 bottom-32 left-10 ">
        <img src="public/body2-img1-fire.png" alt="" />
       <p className="text-red-500 text-sm font-bold">popular</p></div>
      <div className="content">
        <h4 className="font-bold text-black">$ 2,389</h4>
        <p className="font-bold text-black">Grand Estate on the Hilltop</p>
        <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
        <div className="flex flex-row gap-3">
        <img src="vector-4.png" alt="" />
        <p>4 Beds</p>
          <img src="icon-bathroom.png" alt="" />
        <p>3 Bath</p>
        </div>
      </div>
    </div>
  </div>
   <div className="carousel-item" style={{ minWidth: '300px' }}>
    <div className="flex flex-col items-left relative">
      <img src="body2-img2.png" alt="Burger" />
      <div className="w-[120px] h-[45px] absolute bg-red-200 flex justify-center items-center rounded-full gap-3 bottom-32 left-10 ">
        <img src="public/body2-img1-fire.png" alt="" />
       <p className="text-red-500 text-sm font-bold">popular</p></div>
      <div className="content">
       <h4 className="font-bold text-black">$5,970</h4>
        <p className="font-bold text-black">Tranquil Haven in the Woods</p>
        <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
        <div className="flex flex-row gap-3">
        <img src="vector-4.png" alt="" />
        <p>4 Beds</p>
          <img src="icon-bathroom.png" alt="" />
        <p>3 Bath</p>
        </div>
      </div>
    </div>
  </div>
</div>





{/* <div className="carousel rounded-box overflow-hidden ml-10 py-24 gap-10 flex">
  <div className="carousel-item object-cover relative" style={{ minWidth: '300px' }}>
    <div className="w-[200px] h-[50px] bg-red-200 absolute rounded-full flex justify-center items-center gap-5 bottom-10 left-14">
      <img src="body2-img1.png" alt="Burger" />
      <h4 className="text-red-500 font-bold text-lg">popular</h4>
    </div> */}
    {/* <div className="  w-[300px]">
      <h4 className="font-bold text-black">$5,970</h4>
      <p className="font-bold text-black">Tranquil Haven in the Woods</p>
      <p className="text-sm">103 Wright CourtBurien, WA 98168</p>
      <div className="flex justify-start items-start gap-5 mb-3 justify-start">
        <img src="vector-4.png" alt="" />
        <span>4 Beds</span>
        <span>
          <img src="icon-bathroom.png" alt="" />
        </span>
        <span>3 Bath</span>
      </div> */}
    {/* </div> */}
  {/* </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <img src="body2-img2.png" alt="Burger" />
  </div>

  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <img src="body2-img3.png" alt="Burger" />
  </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <img src="body2-img1.png" alt="Burger" />
  </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <img src="body2-img2.png" alt="Burger" />
  </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <img src="body2-img3.png" alt="Burger" />
  </div>
  <div className="carousel-item" style={{ minWidth: '300px' }}>
    <img src="body2-img2.png" alt="Burger" />
  </div>
</div> */}









      <div className=" w-[100%] bg-base-300 px-28 py-20">
        <div className="text-center items-center w-full mb-10">
          <h4 className="text-sm ">OUR SERVICES</h4>
          <h2 className="text-xl font-bold">
            Donec porttitor euismod dignissim
          </h2>
        </div>
        <div className="flex items-center justify-center gap-10 ">
          <div className="w-[320px] h-[340px] flex flex-col gap-5 bg-white rounded-2xl justify-center items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-[#4361EE] flex justify-center items-center">
              <svg
                className="w-6 h-6 text-white  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Buy a New Home</h3>
            <p className="text-center">
              Donec porttitor euismod dignissim. <br /> Nullam a lacinia ipsum,{" "}
              <br /> nec dignissim purus.{" "}
            </p>
          </div>

          <div className="w-[320px] h-[340px] flex flex-col gap-5 bg-white rounded-2xl justify-center items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-[#4361EE] flex justify-center items-center">
              <svg
                className="w-6 h-6 text-white dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Sell a House</h3>
            <p className="text-center">
              Donec porttitor euismod dignissim. <br /> Nullam a lacinia ipsum,{" "}
              <br /> nec dignissim purus. .{" "}
            </p>
          </div>

          <div className="w-[320px] h-[340px] flex flex-col gap-5 bg-white rounded-2xl justify-center items-center">
            <div className="w-[50px] h-[50px] rounded-full bg-[#4361EE] flex justify-center items-center">
              <img src="Vector-white.png" alt="" className="w-[30px] h-[30px] object-fit"/>
            </div>
            <h3 className="text-xl font-bold">Rent a House</h3>
            <p className="text-center">
              Donec porttitor euismod dignissim. <br /> Nullam a lacinia ipsum,
              <br /> nec dignissim purus.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
