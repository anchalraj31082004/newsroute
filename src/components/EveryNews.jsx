import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../store/articleSlice";
import NewsCard from "./NewsCard";
import NewsLoader from "./NewsLoader";

function EveryNews() {
  const [everyNews, setEveryNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();


  const { articles } = useSelector((state) => state.article.article);
  // console.log(articles);

  useEffect(() => {
    if (articles) {
      setEveryNews(articles);
    }
  }, [articles]);

  const fetchData = async () => {
    try {
      await dispatch(getAllNews({ query: "en", page: page }));
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    const isBottom =
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight;

    if (isBottom && loading) {
      fetchData();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="mt-10 lg:mt-20 flex flex-col gap-5 text-center lg:gap-10 w-full">
      <h1 className=' text-3xl pt-3 md:pt-1 lg:text-5xl font-semibold text-center text-orange-500 sticky top-0 z-10 bg-white pb-4'>Everything</h1>
      <ul className="flex flex-col gap-10">
      {
        everyNews?.map((item, index) => (
          <NewsCard item={item} key={index}/>
        ))
      }
      </ul>
      {
        loading && <div className="mt-10 lg:mt-20 flex flex-col gap-5 text-center lg:gap-10 w-full">
          <h1 className=' text-3xl pt-3 md:pt-1 lg:text-5xl font-semibold text-center text-orange-500 sticky top-0 z-10 bg-white pb-4'>
            loading...
          </h1>
          <div className="flex flex-col items-center w-full gap-10">
              <NewsLoader/>
              <NewsLoader/>
              <NewsLoader/>
          </div>
        </div>
      }
    </div>
  );
}

export default EveryNews;
