import React from 'react'
import {Routes,Route} from "react-router-dom"
import Cart from './Cart'
import Navbar from "./Navbar"
import Products from './Products/Products'
const Allroutes = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path={'/'} element={<Products/>}   />
    <Route path={'/cart'} element={<Cart/>}   />
    </Routes>
      
    </div>
  )
}

export default Allroutes
