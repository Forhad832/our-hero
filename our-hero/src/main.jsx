import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import MainLayout from './MainLayout/MainLayout.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import AboutMore from './components/AboutMore/AboutMore';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path:'/:id',
        element :<AboutMore></AboutMore>
       
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
