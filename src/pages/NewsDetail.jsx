import React from 'react'
import { useLocation } from 'react-router-dom'

function NewsDetail() {
    const data = useLocation()
    console.log(data);
  return (
    <div>NewsDetail</div>
  )
}

export default NewsDetail