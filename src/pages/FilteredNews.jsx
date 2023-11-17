import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getFilteredNews } from '../store/articleSlice';
import NewsCard from '../components/NewsCard';
import NewsLoader from '../components/NewsLoader';

function FilteredNews() {
    const {category} = useParams()
    const dispatch = useDispatch()
    // console.log(category);

 
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
      dispatch(getFilteredNews({category : category}))
    },[category, dispatch])

    useEffect(() => {
      window.scrollTo(0,0)
    },[category])

    let categoryData ;
    if(category === 'science') {
      categoryData = useSelector(state => state.article.scienceArticles)
    }
    if(category === 'business') {
      categoryData = useSelector(state => state.article.businessArticles)
    }
    if(category === 'sports') {
      categoryData = useSelector(state => state.article.sportsArticles)
    }
    if(category === 'health') {
      categoryData = useSelector(state => state.article.healthArticles)
    }
    if(category === 'general') {
      categoryData = useSelector(state => state.article.generalArticles)
    } 
    if(category === 'technology') {
      categoryData = useSelector(state => state.article.technologyArticles)
    }
    if(category === 'entertainment') {
      categoryData = useSelector(state => state.article.entertainmentArticles)
    }


    useEffect(() => {
      if(categoryData) {
        setArticles(categoryData?.articles)
        setLoading(false)
      }
    },[categoryData])

    // console.log(articles);
  
  return loading ? (
    <div className='h-screen'>
      ...loading
    </div>) : (
      articles && articles.length > 0 ? (
        <div className="mt-10 lg:mt-20 flex flex-col gap-5 lg:gap-10 w-full">
          <h1 className=' text-2xl md:text-3xl pt-3 md:pt-1 lg:text-5xl font-semibold text-center lg:text-start text-orange-500 sticky top-0 z-10 bg-white pb-4'>{category.toUpperCase()}</h1> 
          {
            articles && articles?.map((article, index) => (
              <NewsCard key={index} item={article}/>
            ))
          }
        </div>
      ) : (
        <div className="mt-10 lg:mt-20 flex flex-col gap-5 lg:gap-10 w-full">
          <h1 className=' text-2xl md:text-3xl pt-3 md:pt-1 lg:text-5xl font-semibold text-center lg:text-start text-orange-500 sticky top-0 z-10 bg-white pb-4'>loading....</h1> 
          <div className='flex flex-col gap-10'>
            <NewsLoader/>
            <NewsLoader/>
            <NewsLoader/>
          </div>
        </div>
      )
    )
  
}

export default FilteredNews
