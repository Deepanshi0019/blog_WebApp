import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout'
import Home from './Components/Home/Home'
import Profile from './Components/profile/Profile'
import Login from './Components/page/Login'
import SignUp from './Components/page/SignUp'
import Setup from './Components/profile/Setup'
import Post from './Components/Post/Post'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children:[
        {
        path: "/Home",
        element: <Home/>,
       },
       {
        path:"/Profile",
        element:<Profile/>
       },
       {
        path:"/Setup",
        element:<Setup/>
       },
       {
        path:"/Login",
        element:<Login/>
       },
       {
        path:"/Signup",
        element:<SignUp/>
       },{
        path:"/Post",
        element:<Post/>
       }
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App