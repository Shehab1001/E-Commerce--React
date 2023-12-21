import React, { useContext, useEffect } from "react";
import './App.css';
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
import { userContext } from "./Components/Context/UserContext";
import ProtectedRouter from "./Components/protectedRouter/protectedRouter";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import CartContextProvider from "./Components/Context/CartContext";

export default function App() {

  let router = createBrowserRouter([

    {
      path: '/', element: <Layout />, children: [
        { index: true, element: <ProtectedRouter><Home /> </ProtectedRouter>},
        { path: 'register', element: <Register /> },
        { path: 'login', element: <Login /> },
        { path: 'cart', element:  <ProtectedRouter><Cart /> </ProtectedRouter> },
        { path: 'categories', element:  <ProtectedRouter><Categories /> </ProtectedRouter> },
        { path: 'products', element:  <ProtectedRouter><Products /> </ProtectedRouter> },
        { path: 'brands', element:  <ProtectedRouter><Brands /> </ProtectedRouter> },
        { path: 'productdetails/:id', element:  <ProtectedRouter><ProductDetails /> </ProtectedRouter> },
        { path: '*', element: <NotFound /> }

      ]
    }
  ]);


  let { setUserToken } = useContext(userContext);

  useEffect(() => {
    if (localStorage.getItem('userToken') !== null) {
      setUserToken(localStorage.getItem('userToken'))
    }
  })

  return <>
  <CartContextProvider>
  <RouterProvider router={router}></RouterProvider>
  </CartContextProvider>

  </>;


}