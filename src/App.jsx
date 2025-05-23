import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Components/Home"
import ProductList from "./Components/ProductList"
import Cart from "./Components/Cart"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import About from "./Components/About"
import Contact from "./Components/Contact"
import ProductDetails from "./Components/ProductDetails"
import Error from "./Components/Error"


 function App() {
//   const getLocation = async () => {
//     navigator.geolocation.getCurrentPosition(pos => {
//       const { latitude, longitude} = pos.coords
//      // console.log(latitude, longitude);
      
//     })
//   }

//   useEffect (() => {
//     getLocation()
//   }, [])

  return (
    <Router> 
      <Navbar />
      <Routes>
        <Route path="/" element= { <Home />}></Route>
        <Route path="/products" element= {<ProductList />} ></Route>
        <Route path="/products/:id" element= {<ProductDetails />} ></Route>
        <Route path="/about" element={ <About/>}></Route>
        <Route path="/contact" element={ <Contact/>}></Route>
        <Route path="/cart" element={ <Cart/>}></Route>
        <Route path="*" element={<Error />} ></Route>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
