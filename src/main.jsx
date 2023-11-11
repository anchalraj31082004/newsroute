import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import FilteredNews from './pages/FilteredNews.jsx'
import NewsDetail from './pages/NewsDetail.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/filtered-news/:category",
        element:<FilteredNews/>
      },
      {
        path:"/filtered-news/:category/:title",
        element:<NewsDetail/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
