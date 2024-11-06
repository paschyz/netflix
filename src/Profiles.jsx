import { useState } from "react";

export default function Profiles() {
  const [count, setCount] = useState(0);
  const [profiles, setProfiles] = useState([
    {
      name: "Kaiser",
      url: "https://i.pinimg.com/736x/b3/1e/64/b31e64f86809038abde8a9a3936877c0.jpg",
    },
    {
      name: "Isagi",
      url: "https://i.pinimg.com/736x/cf/3a/e5/cf3ae59448715e00d395b34fb5abe869.jpg",
    },
    {
      name: "Rin",
      url: "https://i.pinimg.com/736x/ce/55/7f/ce557f0307ae8ab10c43409a06530475.jpg",
    },
    {
      name: "Barou",
      url: "https://i.pinimg.com/564x/8a/59/c8/8a59c8b4d5783035aeac74eaa12ccffe.jpg",
    },
    {
      name: "Nagi",
      url: "https://i.pinimg.com/736x/80/a3/a5/80a3a5338408831552eeca15ed8967d6.jpg",
    },
  ]);
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
