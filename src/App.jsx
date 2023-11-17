import {Header, Footer} from './components/index'
import { Outlet } from 'react-router-dom'


function App() {



  return (
    <div className='block w-full lg:px-20 lg:py-5'>
        <div className='flex flex-col lg:flex-row'>
        <Header/>
        <div className='lg:w-[90%] lg:px-20 lg:m-5 overflow-auto max-h-screen px-5'>
        <Outlet/>
        </div>
        </div>
        <Footer/>
      </div>
  )
}

export default App