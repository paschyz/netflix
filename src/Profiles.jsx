import { useState } from "react";
import { profiles } from "./utils";
export default function Profiles() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex-col">
        <div className="flex-col">
          <h1 className="text-[3.5vw] text-white text-center my-[.67em]">
            Who's watching ?
          </h1>
          <ul className="flex gap-[2vw] justify-center">
            {profiles.map((profile, index) => {
              return (
                <li className="hover:text-white text-[#808080]" key={index}>
                  <a href="/home">
                    <div
                      style={{ backgroundImage: `url(${profile.url})` }}
                      className="h-[10vw] w-[10vw] bg-cover rounded-[4px] hover:outline-[3px] hover:outline "
                    ></div>
                    <span className="text-center block my-[.6em] text-[1.3vw]  ">
                      {profile.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex justify-center text-[1.2vw] mt-[2em] mb-[1em]">
          <span className=" px-[1.5em] py-[0.5em] text-[#808080]  hover:text-white border border-[#808080] hover:border-white cursor-pointer">
            Manage profiles
          </span>
        </div>
      </div>
    </div>
  );
}
