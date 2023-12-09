import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NewsCard } from '../components';
import { useNavigate } from 'react-router-dom';

const Bookmark = () => {
    const bookmarks = useSelector((state) => state.list)
    const navigate = useNavigate()
    useEffect(()=>{
      if(bookmarks.length === 0) {
        navigate("/")
      }
    },[bookmarks])
    // console.log(bookmarks);
  return bookmarks.length < 1 ? (
    <div className='flex justify-center items-center h-screen font-bold text-orange-500 text-2xl animate-pulse w-full'>No bookmarks avaialble</div>
  ) : (
    <div className='flex flex-col items-start gap-10 h-screen'>
        <h1 className='text-3xl pt-3 md:pt-1 md:text-4xl lg:text-5xl font-semibold text-center text-orange-500 '>Your bookmarks here!</h1>
        <div className='flex flex-col gap-10 py-5 mb-12 md:px-5 overflow-auto h-full'>
            {
                bookmarks?.map((bookmark)=>(
                    <NewsCard key={bookmark.url} item={bookmark} />
                ))
            }
        </div>
    </div>
  )
}

export default Bookmark