import Videos from "./Videos";
import Header from "./Header";
import FirstVideos from "./FirstVideos";
import strangerThingsImage from "./assets/stranger-things.jpg";
export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div>
        <Header></Header>
      </div>
      <div className="relative w-full">
        <div className="relative z-0 h-[65vh] overflow-hidden sm:h-[80vh]">
          <img
            className="block h-full w-full object-cover"
            src={strangerThingsImage}
            alt="thumbnail"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[35vh] bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>
        <div className="relative z-10 flex flex-col gap-[50px]">
          <FirstVideos></FirstVideos>
          <Videos title="Trending Now"></Videos>
          <Videos title="Popular on Netflix"></Videos>
          <Videos title="Because You Watched Stranger Things"></Videos>
          <Videos title="Action & Adventure"></Videos>
          <Videos title="More Like This"></Videos>
        </div>
      </div>
    </div>
  );
}
