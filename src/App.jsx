import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNews, getFilteredNews} from './store/articleSlice'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'




function App() {

  const dispatch = useDispatch();
  
  // const [articles, setArticles] = useState([])
  // // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   dispatch(getAllNews("general"))
  // },[])

  // const getArticle = useSelector(state => state.article.article)
  // useEffect(()=>{
  //   if(getArticle) {
  //     setArticles(getArticle)
  //     // setLoading(false);
  //   }
  // },[getArticle])
  // // console.log(articles);


  const [filteredNews, setFilterdNews] = useState([])

  useEffect(() => {
    dispatch(getFilteredNews({country : 'in'}))
  },[])

  const getFilteredArticle = useSelector(state => state.article.filterdArticle)

 useEffect(() => {
  if(getFilteredArticle) {
    setFilterdNews(getFilteredArticle)
  }
 },[getFilteredArticle])

 console.log(filteredNews);


  return (
    <div className='block w-full'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
  )
}

export default App