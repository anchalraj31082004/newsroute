import React from 'react'
import { useParams } from 'react-router-dom'

function FilteredNews() {
    const {category} = useParams()
    console.log(category);
  return (
    <div>FilteredNews</div>
  )
}

export default FilteredNews