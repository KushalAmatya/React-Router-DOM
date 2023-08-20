import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home' 
import About from './About'
import Root from './Root'
import Error from './Error'
import './index.css'
import './assets/style.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[{
      path:'/',
      element:<Home/>
    },
  {
    path:'/about',
    element:<About/>
  }]
  },
  {
    path:'/about',
    element:<About/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router = {router}/>

)
