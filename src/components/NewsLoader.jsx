import React from 'react'

function NewsLoader() {
  return (
   <div className='flex flex-col gap-4 w-full'>
     <div className="lg:h-[200px] h-[250px] bg-teal-950 rounded-3xl overflow-hidden animate-pulse">
      <div className="lg:w-[350px] bg-gray-500"></div>
      <div className="absolute flex flex-col justify-end p-5 gap-3 text-white">
      </div>
    </div>
   </div>
  )
}

export default NewsLoader