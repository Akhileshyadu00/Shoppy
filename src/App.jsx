import React, { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import ProductList from "./Components/ProductList"
import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar"


function App() {
  const getLocation = async () => {
    navigator.geolocation.getCurrentPosition(pos => {
      const { latitude, longitude} = pos.coords
      console.log(latitude, longitude);
      
    })
  }

  useEffect (() => {
    getLocation()
  }, [])

  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element= { <Home />}></Route>
        <Route path="/products" element= {<ProductList />} ></Route>
        <Route path="/cart" element={ <Cart/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
