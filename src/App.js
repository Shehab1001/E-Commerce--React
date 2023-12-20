import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import Products from './Components/Products/Products'
import Brands from './Components/Brands/Brands'
import Cart from './Components/Cart/Cart'
import NotFound from './Components/NotFound/NotFound'
import Categories from './Components/Categories/Categories'

export default function App() {

  let router = createBrowserRouter([

    {path: '/', element: <Layout/>, children: [
      {index:true, element: <Home/>},
      {path:'register', element: <Register/>},
      {path:'login', element: <Login/>},
      {path:'cart', element: <Cart/>},
      {path:'categories', element: <Categories/>},
      {path:'products', element: <Products/>},
      {path:'brands', element: <Brands/>},
      {path:'*', element: <NotFound/>}

    ]}
  ]);

  return <>
    <RouterProvider router={router}></RouterProvider>
  </>;
}