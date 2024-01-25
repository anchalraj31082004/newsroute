import React from "react";
import { Link } from "react-router-dom";
import {LocalTimeFormat} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../store/bookmarkSlice";
import { MdBookmarkAdd, MdBookmarkRemove } from 'react-icons/md'

function NewsCard({ item }) {
  // console.log(item);

  const localTime = LocalTimeFormat(item?.publishedAt)

  const dispatch = useDispatch();

  const bookmark = useSelector(state => state.list)
  // console.log(bookmark);

  const handleBookmark = () => {
    if(isBookmarked(item.url)) {
      dispatch(removeBookmark({url:item.url}))
    } else{
      dispatch(addBookmark(item))
    }
  }

  const isBookmarked = (articleUrl) => {
    return bookmark?.some((article) => article.url === articleUrl)
  }


  return (
    <div className="flex flex-col lg:flex-row p-5 gap-3 lg:gap-10 rounded-3xl bg-teal-950 text-white cursor-pointer">
      <img
        className="object-cover object-center w-full h-[200px] flex m-auto md:h-[250px] rounded-3xl"
        src={item?.urlToImage}
      />
      <div className="flex flex-col gap-3">
        <Link 
          target="_blank"
          to={item?.url}
          className="text-xl text-sky-700 hover:text-sky-800 transition-all ease-in-out duration-100 md:text-2xl font-bold"
          >
            {item?.title}
        </Link>
        <p className="text-xs md:text-base">
          {item?.description?.slice(0, 150)}...
        </p>
        <p className="hidden lg:flex lg:text-base">{item?.content}</p>
      </div>
      <div className="flex flex-col items-start justify-between pb-5">
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
      <button onClick={handleBookmark} className="m-2 p-2 bg-teal-700/80 shadow-lg shadow-black rounded hover:bg-teal-800 transition-all cursor-pointer md:text-xl">
        {
          isBookmarked(item.url) ? <MdBookmarkRemove className="text-red-400" /> : <MdBookmarkAdd className="text-green-400" />
        }
      </button>
      </div>
    </div>
  );
}

export default NewsCard;
