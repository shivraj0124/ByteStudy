import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
// import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Departments from './Components/Departments'
import Semesters from './Components/Semesters'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import AdminDashB from './Components/Admin/AdminDashB'
import PostsForm from './Components/Admin/PostsForm'
import { Stprovider } from './Components/StudyContext'
import Layout from './Components/Layout'
import Subjects from "./Components/Subjects"
import Notes from './Components/Notes'
function App() {

  return (
    <>
      <Stprovider >
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/Departments" element={<Departments />}></Route>
              <Route exact path="/Semesters/:id" element={<Semesters />}></Route>
              <Route exact path="/Subjects/:id" element={<Subjects />}></Route>
              <Route exact path="/Notes/:id" element={<Notes />}></Route>
              <Route exact path="/SignUp" element={<SignUp />}></Route>
              <Route exact path="/Login" element={<Login />}></Route>
            </Route>
            <Route exact path="/AdminDashB" element={<AdminDashB />}></Route>
            <Route exact path="/PostsForm" element={<PostsForm />}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </Stprovider>
    </>
  )
}

export default App
