export const Navbar = ()=>{
    return(
<>
 <div className="navbar bg-[#03AEFD70] text-white px-20% text-12 h-[2rem] px-10">
    <div className="flex-1">
    <a className="btn btn-ghost text-xl"> 
    <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
        </svg>
        </a>

    <p className="text-sm">Rezilla,18 Grattan St,Brooklyng</p>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>
        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"/>
        </svg>
        +1 206-214-2298
        </a></li>
        <li><a>
        <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z"/>
            <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z"/>
        </svg>
        support@rezilla.com</a></li>
    </ul>
  </div>
</div>



  
  <div className="navbar2 bg-[#FFFFFF] text-black px-1.5rem  text-12 w-[100%] h-[4rem] flex flex-row px-10">
    <div className="flex-1 ">
        <ul className=" menu menu-horizontal flex flex-row gap-2 ">
            <li><a href=""className="">Home</a></li>
            <li><a>About</a></li>
            <li><a>Listing</a></li>
            <li><a>Services</a></li>
            <li><a>Blog</a></li>
        </ul>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
        <li><a>
        <div className="w-[1.8rem] h-[1.8rem] bg-[#03AEFD70] flex items-center justify-center rounded-full">
        <svg className="w-6 h-6 text-white dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 22 22">
          <path fillRule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
        </svg>
        </div>
        Rezilla</a></li>
    </ul>
     </div>
     <div className="navbar-end flex items-center gap-5 p-10">
        <ul className="flex cursor-pointer text-sm">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
            </svg>
            <li className=""><a href="">Login/Register</a></li>
            </ul>
            <ul>
            <div className="w-[9rem] h-[2.5rem] bg-[#03AEFD70] flex items-center justify-center rounded-full text-white gap-3 sm-flex left-0 ">
            <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clip-rule="evenodd"/>
            </svg> <li className="text-sm"><a href=""> Add listing </a></li>
            </div>
            </ul>
        </div>
    </div>   
     </>
    )
}