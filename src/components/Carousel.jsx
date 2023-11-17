import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "../store/articleSlice";

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews("general"));
  }, []);

  const { articles } = useSelector((state) => state.article.article);
  // console.log(articles);

  useEffect(() => {
    if (articles) {
      setCarouselData(articles);
    }
  }, [articles]);

  return (
    <Swiper
    className="rounded-3xl"
      modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {carouselData?.slice(0, 6)?.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="lg:h-80 h-64 w-full relative rounded-3xl text-white">
            <img
              className="lg:h-80 h-64 w-full object-cover rounded-3xl"
              src={data?.urlToImage}
              alt={`Slide ${index + 1}`}
            />
            <div className="absolute w-full h-full left-0 top-0 bg-gradient-to-b from-transparent to-black opacity-90 flex gap-10 lg:gap-20 justify-end items-end p-4">
              <div className="w-3/4 flex flex-col gap-2">
                <h3 className="font-bold text-xl md:text-2xl lg:text-3xl  text-orange-600">{data?.title}</h3>
                <p className="lg:text-lg md:text-sm text-xs">{data?.description.slice(0,120)}</p>
              </div>
              <div className="w-1/4">
                <p className="md:text-sm text-xs"><span className="text-teal-500 text-sm lg:text-base  font-medium">Source : </span>{data.source.name}</p>
                <p className="md:text-sm text-xs"><span className="text-teal-500 text-sm lg:text-base  font-medium">Published-Date :</span> {data.publishedAt}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
