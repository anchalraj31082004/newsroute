import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilteredNews } from "../store/articleSlice";
import { NewsCard, NewsLoader, ScrollToTopBtn, SearchBar } from "../components";

function FilteredNews() {
  const { category } = useParams();
  const dispatch = useDispatch();
  // console.log(category);

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    searchQuery.length > 0
      ? dispatch(getFilteredNews({ category: category, query: searchQuery }))
      : dispatch(getFilteredNews({ category: category, query: "" }));
  }, [category, dispatch, searchQuery]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSearchQuery("");
  }, [category]);

  let categoryData;
  if (category === "science") {
    categoryData = useSelector((state) => state.article.scienceArticles);
  }
  if (category === "business") {
    categoryData = useSelector((state) => state.article.businessArticles);
  }
  if (category === "sports") {
    categoryData = useSelector((state) => state.article.sportsArticles);
  }
  if (category === "health") {
    categoryData = useSelector((state) => state.article.healthArticles);
  }
  if (category === "general") {
    categoryData = useSelector((state) => state.article.generalArticles);
  }
  if (category === "technology") {
    categoryData = useSelector((state) => state.article.technologyArticles);
  }
  if (category === "entertainment") {
    categoryData = useSelector((state) => state.article.entertainmentArticles);
  }

  useEffect(() => {
    if (categoryData) {
      setArticles(categoryData?.articles);
      setLoading(false);
    }
  }, [categoryData]);

  // console.log(articles);

  const handleSearch = (query) => {
    // console.log(query);
    setSearchQuery(query);
  };

  return loading ? (
    <div className="h-screen">loading...</div>
  ) : articles && articles.length > 0 ? (
      <div className="mt-10 lg:mt-20 flex flex-col gap-5 lg:gap-10 w-full h-screen">
        <div className="flex justify-between gap-12 items-center sticky top-0 z-10 bg-white pb-4">
          <h1 className=" text-3xl pt-3 md:pt-1 md:text-4xl lg:text-5xl font-semibold text-center text-orange-500 ">
            {category.toUpperCase()}
          </h1>
          <SearchBar onSearch={handleSearch} />
        </div>
        <ul id="scrollTop" className="flex flex-col gap-10 py-5 mb-12 md:px-5 overflow-auto h-full">
          {articles &&
            articles?.map((article, index) => (
              <NewsCard key={index} item={article} />
            ))}
          <div className="absolute z-10 w-[70vw] flex bottom-8 mx-auto justify-end ">
            <ScrollToTopBtn targetId="scrollTop" />
          </div>
        </ul>
      </div>
  ) : (
    <div className="mt-10 lg:mt-20 flex flex-col gap-5 lg:gap-10 w-full">
      <h1 className=" text-2xl md:text-3xl pt-3 md:pt-1 lg:text-5xl font-semibold text-center lg:text-start text-orange-500 sticky top-0 z-10 bg-white pb-4">
        loading....
      </h1>
      <div className="flex flex-col gap-10">
        <NewsLoader />
        <NewsLoader />
        <NewsLoader />
      </div>
    </div>
  );
}

export default memo(FilteredNews);
