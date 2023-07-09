import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home"
import Footer from './Components/Footer'
import Departments from './Components/Departments'
import Semesters from './Components/Semesters'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import AdminLayout from './Components/Admin/AdminLayout'
import { Stprovider } from './Components/StudyContext'
import Layout from './Components/Layout'
import Subjects from "./Components/Subjects"
import Notes from './Components/Notes'
import ForgotPassword from './Components/ForgotPassword';
import Options from './Components/Options';
import QuestionP from './Components/QustionP';
import Experiments from './Components/Experiments';
import { Authprovider } from './Components/Authcontext';
import UserProfile from './Components/UserProfile';

function App() {
  return (
    <>
    <Authprovider>
      <Stprovider >
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<Layout />}>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/Departments" element={<Departments />}></Route>
              <Route exact path="/Semesters/:id" element={<Semesters />}></Route>
              <Route exact path="/Subjects/:id" element={<Subjects />}></Route>
              <Route exact path="/Options/:id" element={<Options />}></Route>
              <Route exact path="/Notes/:id" element={<Notes />}></Route>
              <Route exact path="/QuestionsPapers/:id" element={<QuestionP />}></Route>
              <Route exact path="/Experiments/:id" element={<Experiments />}></Route>
              <Route exact path="/SignUp" element={<SignUp />}></Route>
              <Route exact path="/Login" element={<Login />}></Route>
              <Route exact path="/Forgot" element={<ForgotPassword />}></Route>
              <Route exact path="/Profile" element={<UserProfile />}></Route>
            </Route>
            <Route  path="/Admin" element={<AdminLayout />}>
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
        <ToastContainer />
      </Stprovider>
      </Authprovider>
    </>
  )
}

export default App
