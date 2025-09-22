import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from '../Pages/Product'
import ProductDetails from '../Pages/ProductDetails'

import Cart from '../Pages/Cart'
import Basis from '../Pages/Basis'
import Home from '../Pages/Home'





export const Routers = () => {
  return (
    <>
    

      <Router>
        <Basis />
        <div style={{ paddingTop: '80px' }}></div>
        <Routes>
          <Route path='/Product' element={<Product />} />

          <Route path='/Product/Details' element={<ProductDetails />} />
       
          <Route path='/Cart' element={<Cart />} />
          <Route path='/Basis' element={<Basis />} />
   
          <Route path='/' element={<Home />} />
        </Routes>
        
      </Router>
    
    </>
  )
}
