import { profiles } from "./utils";
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
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            data-icon="MagnifyingGlassStandard"
            aria-hidden="true"
            class="search-icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10ZM15.6177 17.0319C14.078 18.2635 12.125 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 12.125 18.2635 14.078 17.0319 15.6177L22.7071 21.2929L21.2929 22.7071L15.6177 17.0319Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div>
          <a className="">Kids</a>
        </div>
        <div className="bell-icon h-8 group/bell group/carrier">
          <svg
            className="cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            role="img"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            data-icon="BellStandard"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z"
              fill="currentColor"
            ></path>
          </svg>

          <div className="opacity-0 hidden group-hover/bell:flex group/hitbox bg-white  absolute border-t-[3px] right-[160px] top-[40px] w-[510px] h-[148px]"></div>
          <div className="hidden hover:flex group-hover/hitbox:flex  group-hover/bell:flex items-center justify-center absolute border-t-[3px] border-white bg-[rgba(0,0,0,0.9)] opacity-75 right-[160px] top-[87px] w-[510px] h-[148px] hover:opacity-100">
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
          <div className="opacity-0 hidden group-hover:block group-hitbox absolute w-[66px] h-[50px] bg-white top-12 right-[70px]"></div>
          <div className="group-hover:block group-hitbox:block hidden bg-[rgba(0,0,0,0.9)] opacity-100  h-[560px] w-[280px] absolute right-[70px] top-[90px] text-white pt-1 cursor-default">
            <div>
              <ul className="">
                {profiles.map((profile, index) => {
                  return (
                    <li
                      className=" flex mx-4 mt-4 items-center group/profile cursor-pointer"
                      key={index}
                    >
                      <div
                        style={{ backgroundImage: `url(${profile.url})` }}
                        className="rounded h-10 w-10 bg-cover mr-[12px]"
                      ></div>
                      <span className="group-hover/profile:underline brightness-200">
                        {profile.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex flex-col gap-4 mt-4 mb-[20px]">
                <li className="flex group/account cursor-pointer items-center">
                  <div className="mx-1">
                    <svg
                      className="mx-[14px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      data-icon="PencilStandard"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.1213 1.7071C17.9497 0.535532 16.0503 0.53553 14.8787 1.7071L13.2929 3.29289L12.5858 4L1.58579 15C1.21071 15.3751 1 15.8838 1 16.4142V21C1 22.1046 1.89543 23 3 23H7.58579C8.11622 23 8.62493 22.7893 9 22.4142L20 11.4142L20.7071 10.7071L22.2929 9.12132C23.4645 7.94975 23.4645 6.05025 22.2929 4.87868L19.1213 1.7071ZM15.5858 7L14 5.41421L3 16.4142L3 19C3.26264 19 3.52272 19.0517 3.76537 19.1522C4.00802 19.2527 4.2285 19.4001 4.41421 19.5858C4.59993 19.7715 4.74725 19.992 4.84776 20.2346C4.94827 20.4773 5 20.7374 5 21L7.58579 21L18.5858 10L17 8.41421L6.70711 18.7071L5.29289 17.2929L15.5858 7ZM16.2929 3.12132C16.6834 2.73079 17.3166 2.73079 17.7071 3.12132L20.8787 6.29289C21.2692 6.68341 21.2692 7.31658 20.8787 7.7071L20 8.58578L15.4142 4L16.2929 3.12132Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="group-hover/account:underline">
                    Manage profiles
                  </span>
                </li>
                <li className="flex group/profile cursor-pointer">
                  <div className="mx-1">
                    <svg
                      className="mx-[14px]"
                      id="profile-transfer"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 1C3.79086 1 2 2.79086 2 5V17C2 19.2091 3.79086 21 6 21H9.58579L8.29289 22.2929L9.70711 23.7071L12.7071 20.7071C13.0976 20.3166 13.0976 19.6834 12.7071 19.2929L9.70711 16.2929L8.29289 17.7071L9.58579 19H6C4.89543 19 4 18.1046 4 17V5C4 3.89543 4.89543 3 6 3H18C19.1046 3 20 3.89543 20 5V17C20 18.1046 19.1046 19 18 19H15V21H18C20.2091 21 22 19.2091 22 17V5C22 2.79086 20.2091 1 18 1H6ZM7.5 10C8.32843 10 9 9.32843 9 8.5C9 7.67157 8.32843 7 7.5 7C6.67157 7 6 7.67157 6 8.5C6 9.32843 6.67157 10 7.5 10ZM18 8.5C18 9.32843 17.3284 10 16.5 10C15.6716 10 15 9.32843 15 8.5C15 7.67157 15.6716 7 16.5 7C17.3284 7 18 7.67157 18 8.5ZM16.402 12.1985C15.7973 12.6498 14.7579 13 13.5 13C12.2421 13 11.2027 12.6498 10.598 12.1985L9.40195 13.8015C10.4298 14.5684 11.9192 15 13.5 15C15.0808 15 16.5702 14.5684 17.598 13.8015L16.402 12.1985Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="group-hover/profile:underline">
                    Transfer profile
                  </span>
                </li>
                <li className="flex group/account cursor-pointer items-center">
                  <div className="mx-1">
                    <svg
                      className="mx-[14px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      data-icon="UserStandard"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15 5C15 6.65685 13.6569 8 12 8C10.3431 8 9 6.65685 9 5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5ZM17 5C17 7.76142 14.7614 10 12 10C9.23858 10 7 7.76142 7 5C7 2.23858 9.23858 0 12 0C14.7614 0 17 2.23858 17 5ZM4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21V21.5136C19.5678 21.5667 18.9844 21.6327 18.2814 21.6988C16.6787 21.8495 14.461 22 12 22C9.53901 22 7.32131 21.8495 5.71861 21.6988C5.01564 21.6327 4.43224 21.5667 4 21.5136V21ZM21.1508 23.3775C21.1509 23.3774 21.151 23.3774 21 22.3889L21.151 23.3774C21.6393 23.3028 22 22.8829 22 22.3889V21C22 15.4772 17.5228 11 12 11C6.47715 11 2 15.4772 2 21V22.3889C2 22.8829 2.36067 23.3028 2.84897 23.3774L3 22.3889C2.84897 23.3774 2.84908 23.3774 2.8492 23.3775L2.84952 23.3775L2.85043 23.3776L2.85334 23.3781L2.86352 23.3796L2.90103 23.3852C2.93357 23.3899 2.98105 23.3968 3.04275 23.4055C3.16613 23.4228 3.3464 23.4472 3.57769 23.4765C4.04018 23.535 4.7071 23.6126 5.5314 23.6901C7.1787 23.8449 9.461 24 12 24C14.539 24 16.8213 23.8449 18.4686 23.6901C19.2929 23.6126 19.9598 23.535 20.4223 23.4765C20.6536 23.4472 20.8339 23.4228 20.9573 23.4055C21.0189 23.3968 21.0664 23.3899 21.099 23.3852L21.1365 23.3796L21.1467 23.3781L21.1496 23.3776L21.1505 23.3775L21.1508 23.3775Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="group-hover/account:underline">Account</span>
                </li>
                <li className="flex group/account cursor-pointer items-center">
                  <div className="mx-1">
                    <svg
                      className="mx-[14px]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                      viewBox="0 0 24 24"
                      width="32"
                      height="32"
                      data-icon="CircleQuestionMarkStandard"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM12 8C10.6831 8 10 8.74303 10 9.5H8C8 7.25697 10.0032 6 12 6C13.9968 6 16 7.25697 16 9.5C16 10.8487 14.9191 11.7679 13.8217 12.18C13.5572 12.2793 13.3322 12.4295 13.1858 12.5913C13.0452 12.7467 13 12.883 13 13V14H11V13C11 11.5649 12.1677 10.6647 13.1186 10.3076C13.8476 10.0339 14 9.64823 14 9.5C14 8.74303 13.3169 8 12 8ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <span className="group-hover/account:underline">
                    Help center
                  </span>
                </li>
              </ul>
              <ul className="border-t-[1px] border-white ">
                <li className="flex justify-center px-2 cursor-pointer group/sign-out my-[20px]">
                  <span className="group-hover/sign-out:underline">
                    Sign out of Netflix
                  </span>
                </li>
              </ul>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </header>
  );
}
