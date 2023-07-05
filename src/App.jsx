import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Components/Home"
import Navbar from './Components/Navbar'
import Footer  from './Components/Footer'
import Departments from './Components/Departments'
import Semesters from './Components/Semesters'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import AdminDashB from './Components/AdminDashB'
import PostsForm from './Components/PostsForm'
function App() {

  return (
    <>
      
        
      
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/Departments" element={<Departments />}></Route>
        <Route exact path="/Semesters/:id" element={<Semesters />}></Route>
        <Route exact path="/SignUp" element={<SignUp />}></Route>
        <Route exact path="/Login" element={<Login />}></Route>
        <Route exact path="/AdminDashB" element={<AdminDashB />}></Route>
        <Route exact path="/PostsForm" element={<PostsForm />}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
     
    </>
  )
}

export default App
