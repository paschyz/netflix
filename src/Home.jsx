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
          <Videos></Videos>
          <Videos></Videos>
          <Videos></Videos>
          <Videos></Videos>
          <Videos></Videos>
        </div>
      </div>
    </div>
  );
}
