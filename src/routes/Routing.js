import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/home/Home'
import Shop from '../components/shop/Shop'
import SingleProduct from '../components/singleProduct/SingleProduct'
import Cart from '../components/cart/Cart'
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        {/* <Route path='/singleProduct' element={<SingleProduct/>}></Route> */}
        <Route path='/singleProduct/:id' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>

    </Routes>
    </>
  )
}

export default Routing
