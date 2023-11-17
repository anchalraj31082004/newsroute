import React from 'react'
import { Link } from 'react-router-dom'

function NewsCard({item}) {
  return (
    <div className="flex flex-col lg:flex-row p-5 gap-3 lg:gap-10 rounded-3xl bg-teal-950 text-white">
          <img className=" w-full lg:w-[350px] h-[200px] md:h-[250px] rounded-3xl" src={item?.urlToImage} alt="" />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl md:text-2xl font-bold">{item?.title}</h2>
              <p className="text-xs md:text-base">{item?.description}</p>
              <p className="hidden lg:flex lg:text-base">{item?.content}</p>
            </div>
            <div className="flex flex-col">
              <span className="text-xs md:text-base">
                <b >publishedAt :</b> {item?.publishedAt}
              </span>
              <span className="text-xs md:text-base">
                <b >source: </b>
                {item?.source?.name}
              </span>
              <Link target="_blank" className="text-sky-700 text-xs md:text-base" to={item?.url}>
                <b className="text-xs md:text-base text-orange-500">Go to : </b>
                Main content
              </Link>
            </div>
        </div>
  )
}

export default NewsCard