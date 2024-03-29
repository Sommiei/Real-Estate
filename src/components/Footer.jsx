export const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <nav>
          <div className="flex items-center justify-center ">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>
                  <div className="w-[1.8rem] h-[1.8rem] bg-[#03AEFD70] flex items-center justify-center rounded-full">
                    <svg
                      className="w-6 h-6 text-white dark:text-white "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      fill="currentColor"
                      viewBox="0 0 22 22"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  Rezilla
                </a>
              </li>
            </ul>
          </div>
          <a className="link link-hover">
            2728 Hickory StreetSalt
            <br /> Lake City, UT 84104
          </a>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="link link-hover ">
                  <svg
                    className="w-6 h-6 text-black dark:text-white"
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
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                  +1 206-214-2298
                </a>
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <a className="link link-hover">
                <svg
                  className="w-6 h-6 text-black dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
                  <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
                </svg>
                support@rezilla.com
              </a>
            </li>
          </ul>
        </nav>

        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Listings</a>
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">Become a Agent</a>
        </nav>
        <nav>
          <h6 className="footer-title">Discovery</h6>
          <a className="link link-hover">Canada</a>
          <a className="link link-hover">United States</a>
          <a className="link link-hover">Germany</a>
          <a className="link link-hover">Africa</a>
          <a className="link link-hover">India</a>
        </nav>

        <nav>
          <h6 className="footer-title">Subscribe to our Newsletter!</h6>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label ">
                <span className="label-text ">Enter your email address</span>
              </label>
              <div className="join rounded-full ">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-[#03AEFD] join-item">
                  <div className=" w-[30px] h-[30px]  bg-[#eef1f2] rounded-full flex justify-center items-center ">
                    <svg
                      className="w-6 h-6 text-[#03AEFD] dark:text-white"
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
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </div>
                </button>
              </div>
            </fieldset>
          </form>
        </nav>
      </footer>

      <footer>
  <div className="bg-black text-white text-sm px-10 py-4 flex items-center justify-between">
    <p>© Rezilla – All rights reserved</p>
    <div className="flex items-center gap-10">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a className="text-white">Terms and Conditions</a>
        </li>
        <li>
          <a className="text-white">Privacy Policy</a>
        </li>
        <li>
          <a className="text-white">Disclaimer</a>
        </li>
      </ul>
    </div>
  </div>
</footer>

    </>
  );
};
