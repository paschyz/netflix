export default function Header(params) {
  return (
    <header className="flex justify-between h-[41px] px-16 py-10 items-center fixed w-full">
      <div className="flex items-center">
        <div className="mr-16">
          <a href="">
            <img
              className="max-h-16 "
              src="https://awfulannouncing.com/wp-content/uploads/sites/94/2015/05/Netflix_Web_Logo.png"
              alt=""
            />
          </a>
        </div>
        <ul className="flex gap-8 font-light text-[#E5E5E5] ">
          <li className="pointer-events-none font-semibold">Home</li>
          <li className="cursor-pointer hover:text-[#B3B3B3] transition duration-500">
            TV Shows
          </li>
          <li className="cursor-pointer hover:text-[#B3B3B3] transition duration-500">
            Movies
          </li>
          <li className="cursor-pointer hover:text-[#B3B3B3] transition duration-500">
            New & Popular
          </li>
          <li className="cursor-pointer hover:text-[#B3B3B3] transition duration-500">
            My List
          </li>
          <li className="cursor-pointer hover:text-[#B3B3B3] transition duration-500">
            Browse by Languages
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-8 ">
        <div className="search-icon h-8 cursor-pointer">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>
          <a className="">Kids</a>
        </div>
        <div className="bell-icon h-8 group/bell group/carrier">
          <svg
            className="cursor-pointer"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.35442 21C10.0596 21.6224 10.9858 22 12.0002 22C13.0147 22 13.9409 21.6224 14.6461 21M2.29414 5.81989C2.27979 4.36854 3.06227 3.01325 4.32635 2.3M21.7024 5.8199C21.7167 4.36855 20.9342 3.01325 19.6702 2.3M18.0002 8C18.0002 6.4087 17.3681 4.88258 16.2429 3.75736C15.1177 2.63214 13.5915 2 12.0002 2C10.4089 2 8.88283 2.63214 7.75761 3.75736C6.63239 4.88258 6.00025 6.4087 6.00025 8C6.00025 11.0902 5.22072 13.206 4.34991 14.6054C3.61538 15.7859 3.24811 16.3761 3.26157 16.5408C3.27649 16.7231 3.31511 16.7926 3.46203 16.9016C3.59471 17 4.19284 17 5.3891 17H18.6114C19.8077 17 20.4058 17 20.5385 16.9016C20.6854 16.7926 20.724 16.7231 20.7389 16.5408C20.7524 16.3761 20.3851 15.7859 19.6506 14.6054C18.7798 13.206 18.0002 11.0902 18.0002 8Z"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div className="opacity-0  group/hitbox bg-white  absolute border-t-[3px] right-[160px] top-[40px] w-[510px] h-[148px]"></div>
          <div className="hidden hover:flex group-hover/hitbox:flex  group-hover/bell:flex items-center justify-center absolute border-t-[3px] border-white bg-black opacity-75 right-[160px] top-[87px] w-[510px] h-[148px] hover:opacity-100">
            <p className="text-[#6D6D6D] text-xl  ">No recent notifications</p>

            <svg
              className=" absolute top-[-15px] right-[9px] w-6 h-6 rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18 9H6L12 15L18 9Z" fill="#ffffff"></path>{" "}
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <div>
            <img
              src="https://i.pinimg.com/736x/ce/55/7f/ce557f0307ae8ab10c43409a06530475.jpg"
              alt="profile-icon"
              className="rounded h-10 w-10"
            />
          </div>
          <div className=" w-6 h-6 cursor-pointer group-hover:rotate-180 transition duration-200">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M18 9H6L12 15L18 9Z" fill="#ffffff"></path>{" "}
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
