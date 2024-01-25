import React, { memo, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../store/articleSlice";
import { NewsCard, NewsLoader, ScrollToTopBtn, SearchBar } from "../components";

function EveryNews() {
  const [everyNews, setEveryNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();
  const ulRef = useRef();
  // console.log(articles);

  const fetchData = async (query) => {
    setLoading(true);
    try {
      await dispatch(getAllNews({ query: query, page: page }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    const handleScroll = () => {
      if (
        ulRef.current.innerHeight + ulRef.current.documentElement.scrollTop ===
        ulRef.current.documentElement.offsetHeight
      ) {
        fetchData();
        setPage((prevPage) => prevPage + 1);
      }
    };

    ulRef.current?.addEventListener("scroll", handleScroll);

    return () => {
      ulRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, page]);

  const handleSearch = (query) => {
    // console.log(query);
    setPage(1);
    setSearchQuery(query);
  };

  const { articles } = useSelector((state) => state.article.article);
  // console.log(articles);

  useEffect(() => {
    if (searchQuery) {
      fetchData(searchQuery);
    }
    setSearchQuery("");
  }, [searchQuery]);

  useEffect(() => {
    if (articles) {
      setEveryNews([...articles]);
    }
  }, [articles, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  // console.log(loading);

  return loading ? (
    <div className="mt-2 md:mt-10 lg:mt-20 flex flex-col gap-5 text-center lg:gap-10 w-full">
      <h1 className=" text-3xl pt-3 md:pt-1 lg:text-5xl font-semibold text-center text-orange-500 sticky top-0 z-10">
        loading...
      </h1>
      <div className="flex flex-col w-full gap-10">
        <NewsLoader />
        <NewsLoader />
        <NewsLoader />
      </div>
    </div>
  ) : (
    <div
      className="mt-2 md:mt-10 lg:mt-20 flex flex-col lg:gap-10 w-full h-screen
    "
    >
      <div className="flex justify-between md:gap-12 items-center sticky top-0 z-10 ">
        <h1 className=" text-3xl pt-3 md:pt-1 md:text-4xl lg:text-5xl font-semibold text-center text-orange-500 cursor-pointer ">
          Everything
        </h1>
        <SearchBar onSearch={handleSearch} />
      </div>
      <ul
        id="scrollTop2"
        className="flex mt-12 overflow-auto min-h-screen flex-col gap-10 py-5 md:px-5 bg-teal-950/40 border-4 border-green-700 backdrop-filter backdrop-blur-lg rounded-lg"
        ref={ulRef}
      >
        {everyNews?.map((item, index) => (
          <NewsCard item={item} key={index} />
        ))}
      </ul>

      <div className="absolute bottom-8 max-w-6xl z-10 w-[80vw] flex mx-auto justify-end">
        <ScrollToTopBtn targetId="scrollTop2" />
      </div>
    </div>
  );
}

export default memo(EveryNews);
