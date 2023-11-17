import React from "react";
import { Carousel } from "../components";
import EveryNews from "../components/EveryNews";

function Home() {
  return (
    <div className="min-h-screen gap-20">
      <Carousel/>
      <EveryNews/>
    </div>
  );
}

export default Home;
