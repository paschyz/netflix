export default function FirstVideos(params) {
  const thumbnails = [
    "https://occ-0-2603-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABX-9VhGKS26ySLlfcZo9ZcQ_qsUL1272qfBeT_0oKuSNAJOV7I74EUfULgYYqAkAlLILCUXEDjSTwP4usByzA_663SSaIFQrEVbCNTi900JkA4wZHTv3AUyl3KamwLnKqRIiQ-tfWelzM9auxi2yCcR9KzeEhCs-Gv9K1JoVB_3-qR8PnXRQlt1AOKsLUIWiL2_MkEAmo6NaHTibUwBcYR6ymYLdvkA5RAt6hSiAtQF9p-PgTLHGo5x3rK8GzKLW4NioKG9Hg8dSgAa_4lqq0IGsDN5Md5zrVK7MQj1NpTXBnR8uUoD08L3dUuLOJuiVg2D7F8gW3lkrKU-7VEykNlmarxJk788SWLelnFdjLpH9HQ.jpg?r=9bd",
    "https://occ-0-2603-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYBSJxa168GTIHh3KDUIknSeFmvH_j0YmSEwzXDeO6IDrFNiSVZIfYqx7cpuAQAf-2cC4QTC-4uOV7KCuKyCt4B6HnLmeMqysgM.webp?r=cd4",
    "https://occ-0-2603-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABV8V6DSMlM3ZSHTFAOrfMlfVvsPf6ARtmRzW66oQHy7ER68dAGhjD0YZPskDtHbwKefC9HFBUX23kUXV5jruj3EUd59fEbQ_wSp5UE3XCxpNiyousNmc9rrtxmU-Vfsf3jPT.jpg?r=81c",
    "https://occ-0-2603-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABafEkwgV-ddaqb-IzfVJPCI7Kc4kSddq7NjUsnrOePu5t6IicZvd_lkxEjYiQkQ2sIpsVBC7Gk653tPkWAy9X9ef9dg3q7LDLpg.webp?r=c30",
    "https://occ-0-2603-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABYTv9sZVyuZds4xUGfvvCsWlj0a6VRlAXLX7N1qZ3X6_JnJenZ8upAt8bGM0P6HAEnWXsr156yvWxtLCDKbodl08nBTr4BInp9U.webp?r=278",
    "https://occ-0-2603-1001.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABcpzgLgaGY8llWGw3rcVDvOTOdOcDGB5p9o0G5ukc-2KQu18vMqQs2t-0I_PYgy8iOLWxW4hYuIoI4bR2Nt3HwlahkFZNnwxH4Y.webp?r=f47",
  ];

  return (
    <div className="relative z-10 ml-4 mt-[-70px] sm:ml-10 sm:mt-[-130px] lg:ml-[75px]">
      <h1 className="mb-4 text-xl font-medium sm:text-2xl lg:text-[28px]">
        Continue Watching for jobinz
      </h1>
      <div>
        <div className="flex h-[clamp(110px,13.5vh,190px)] gap-2 overflow-x-auto pb-2 pr-4 scrollbar-hide">
          {thumbnails.map((thumbnail) => {
            return <img src={thumbnail} alt="" className="aspect-video h-full w-[42vw] flex-shrink-0 rounded object-cover cursor-pointer sm:w-[27vw] lg:w-auto" />;
          })}
        </div>
      </div>
    </div>
  );
}
