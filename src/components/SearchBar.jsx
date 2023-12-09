import React, { useState } from 'react'

function SearchBar({onSearch}) {
 
    const [query, setQuery] = useState('');

    const handleKeyDown = (e) => {
        if(e.key === 'Enter')
        onSearch(query)
    }

  return (
    <div className='flex '>
        <input
         type="text"
         placeholder='Search'
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         className="border p-2 rounded-md w-32 md:w-56"
         onKeyDown={handleKeyDown}
         />
    </div>
  )
}

export default SearchBar