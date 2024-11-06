import { useState } from "react";
import Videos from "./Videos";
import Header from "./Header";
export default function Home() {
  return (
    <div>
      <Header></Header>
      <div>
        <Videos></Videos>
      </div>
    </div>
  );
}
