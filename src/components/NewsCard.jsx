import React from "react";
import { Link } from "react-router-dom";
import {LocalTimeFormat} from "../components";

function NewsCard({ item }) {

  const localTime = LocalTimeFormat(item?.publishedAt)

  return (
    <div className="flex flex-col lg:flex-row p-5 gap-3 lg:gap-10 rounded-3xl bg-teal-950 text-white">
      <img
        className="object-cover object-center w-full lg:w-[350px] h-[200px] flex m-auto md:h-[250px] rounded-3xl"
        src={item?.urlToImage}
        alt={`image here`}
      />
      <div className="flex flex-col gap-3">
        <h2 className="text-xl md:text-2xl font-bold">{item?.title}</h2>
        <p className="text-xs md:text-base">
          {item?.description?.slice(0, 150)}...
        </p>
        <p className="hidden lg:flex lg:text-base">{item?.content}</p>
      </div>
      <div className="flex flex-col">
        <span className="text-xs md:text-base">
          <b>publishedAt :</b> {localTime}
        </span>
        <span className="text-xs md:text-base">
          <b>source: </b>
          {item?.source?.name}
        </span>
        <Link
          target="_blank"
          className="text-sky-700 text-xs md:text-base"
          to={item?.url}
        >
          <b className="text-xs md:text-base text-orange-500">Go to : </b>
          Main content
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
