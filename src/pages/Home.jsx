import React from "react";
import { Carousel, EveryNews } from "../components";

function Home() {
  return (
    <div className="h-[110vh] overflow-auto md:px-10 bg-transparent md:bg-emerald-900/80 py-4
    rounded-lg md:shadow-black shadow-2xl">
      <Carousel/>
      <EveryNews/>
    </div>
  );
}

export default Home;
