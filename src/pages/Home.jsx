import React from "react";
import { Carousel, EveryNews } from "../components";

function Home() {
  return (
    <div className="h-[110vh] overflow-auto">
      <Carousel/>
      <EveryNews/>
    </div>
  );
}

export default Home;
