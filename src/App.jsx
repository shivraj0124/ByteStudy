import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from './Components/Navbar'
import Footer  from './Components/Footer'
import Departments from './Components/Departments'
function App() {

  return (
    <>
      
        
      
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Departments" element={<Departments />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App
