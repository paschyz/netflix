import { useState } from "react";
import Videos from "./Videos";
import Header from "./Header";
import FirstVideos from "./FirstVideos";
export default function Home() {
  return (
    <div className="">
      <div>
        <Header></Header>
      </div>
      <div className="w-full h-[65vh] absolute">
        <div className="">
          <img
            className="h-[80vh] w-[100vw]"
            src="https://asianmoviepulse.com/wp-content/uploads/2023/05/blue-lock-buy.jpe"
            alt="thumbnail"
          />
        </div>
        <div className="flex flex-col gap-[50px]">
          <FirstVideos></FirstVideos>
          <Videos title="Trending Now"></Videos>
          <Videos title="Popular on Netflix"></Videos>
          <Videos title="Because You Watched Blue Lock"></Videos>
          <Videos title="Action & Adventure"></Videos>
          <Videos title="More Like This"></Videos>
        </div>
      </div>
    </div>
  );
}
