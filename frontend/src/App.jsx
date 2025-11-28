import React from 'react'
import {BrowserRouter,Routes, Route } from "react-router-dom";

import NavBar from "./Component/NavBar.jsx"
import Home from "./Pages/Home.jsx"
import Product from "./Pages/Product.jsx"
import ProductDetails from "./Pages/ProductDetails.jsx"
import NotFound from "./Pages/NotFound.jsx"

export default function App() {
  return (
    <BrowserRouter>
    <NavBar/>


    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/productDetails/:id' element={<ProductDetails/>}/>
      <Route path='*' element={<NotFound/>}/>

    </Routes>
    </BrowserRouter>
      
    
  )
}
