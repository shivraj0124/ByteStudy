import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BiSolidDashboard } from 'react-icons/bi'
import PostHook from '../StudyContext'
import PostsForm from './PostsForm'
import axios from 'axios'
import { useAuth } from '../Authcontext'
export default function AdminDashB() {
    const { setPostsP } = PostHook()
    const [auth, setauth] = useAuth()
    const [enableHome, setEnableHome] = useState(true)
    const [notes, setnotes] = useState("");
    const [qp, setqp] = useState("")
    const [exp, setexp] = useState("")
    const [users, setusers] = useState("")
    const navigate = useNavigate()
    const handleAddNew = (e) => {
        const innerHtml = e.target.innerHTML
        console.log(innerHtml)
        setPostsP(innerHtml)
        setEnableHome(false)
    }

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const handleHome = () => {
        setEnableHome(true)
    }
    const getdata = async () => {
        const { data } = await axios.get("http://localhost:5000/api/v1/cnotes");
        setnotes(data)
        console.log(data)

        const qpd = await axios.get("http://localhost:5000/api/v1/cqp")
        setqp(qpd.data)
        console.log(qpd)

        const tusers = await axios.get("http://localhost:5000/api/v1/cuser")
        setusers(tusers.data)


        const texp = await axios.get("http://localhost:5000/api/v1/cexp")
        setexp(texp.data)



    }
    const handleLogOut = () => {
        setauth({
            user: null,
            token: "",
        })
        localStorage.removeItem("auth");
        navigate('/')
    }
    useEffect(() => {
        if (auth?.user?.role !== 1) {
            alert('Login as Admin !');
            navigate('/')

        } else {
            getdata();
        }
    }, [])
    return (
        <>

            <div className="w-[100%] z-10 h-max py-2 max-xl:px-0 px-5 mr-0 bg-white drop-shadow-2xl">
                <h1 onClick={()=> navigate('/')} className='w-full text-3xl font-bold mx-2 cursor-pointer'>ByteStudy</h1>
                <button onClick={handleLogOut} className="block max-md:hidden w-max px-4 text-lg h-8 rounded bg-yellow-300 hover:bg-[#ebeb5a] absolute right-0 top-0 mt-2 mx-8">
                    Logout
                </button>
                <div onClick={handleNav} className='block md:hidden absolute right-0 top-0 mt-5 m-2'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>


            <div className='flex flex-row z-5 bg-gray-100 max-md:pb-16'>
                <div className="hidden md:block h-[700px] w-[300px] max-sm:w-[90%] bg-white text-xl border rounded pl-2 pt-4 ">


                    <div className='flex flex-row ml-2'>
                        <h1 className='mt-1 w-[20px]'  ><BiSolidDashboard size='20px'></BiSolidDashboard></h1>
                        <h1 className='p-0 ml-2'>Dashboard</h1>
                    </div>
                    <div className='flex flex-col text-lg m-8 list-none' >
                        <Link onClick={handleHome} to='/Admin' className='hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>Home</Link>

                        <li className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={handleAddNew}>Notes</li>
                        <li className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={handleAddNew}>QP</li>
                        <li className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={handleAddNew}>Exp</li>
                    </div>
                </div>

                {/* Mobile Nav */}
                <div className={nav ? 'fixed left-0 top-0 w-[90%] h-full border-r  bg-gray-200 ease-in-out duration-500 p-5 text-2xl  z-40 md:hidden' : 'ease-in-out duration-500  fixed left-[-100%] md:hidden'} onClick={handleNav}>
                    <div className='flex flex-row ml-2'>
                        <h1 className='mt-1 w-[20px]'  ><BiSolidDashboard size='23px' /></h1>
                        <h1 className='p-0 ml-2'>Dashboard</h1>
                    </div>
                    <div className='flex flex-col text-xl m-8 list-none' >
                        <Link onClick={handleHome} to='/Admin' className='hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>Home</Link>
                        <li className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={handleAddNew}>Notes</li>
                        <li className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={handleAddNew}>QP</li>
                        <li className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={handleAddNew}>Exp</li>
                        <button onClick={handleLogOut} className="w-max mt-16 px-4 text-lg h-8 rounded bg-yellow-300 hover:bg-[#ebeb5a]">
                            Logout
                        </button>
                    </div>
                </div>


                {/* main view */}

                <div className='w-[100%] h-[650px] max-lg:h-max  rounded text-center max-md:pb-16' >

                    {
                        enableHome ? <>
                            <h1 className='text-2xl mt-4' >Home</h1>
                            <div className='mt-10 w-[100%] grid gap-8 gap-y-16 max-lg:pb-16 lg:grid-cols-2 max-lg:grid-rows-4 justify-items-center' >
                                <div className='  bg-[#bce1ff] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  ' >
                                    <h1 className='font-semibold  text-[#2b5b83]' >Total Users</h1>
                                    <h1 className='mt-5 font-bold text-[#2b5b83]'>{users.tuser}</h1>
                                </div>
                                <div className='bg-[#a9e4ff] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  ' >
                                    <h1 className='font-semibold text-[#27617c]'>Total Notes</h1>
                                    <h1 className='mt-5 font-bold text-[#27617c]'>{notes.tnotes}</h1>
                                </div>
                                <div className='bg-[#fff2ce] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  ' >
                                    <h1 className='font-semibold text-[#725e26]'>Total Question Papers</h1>
                                    <h1 className='mt-5 font-bold text-[#725e26]' >{qp.tqp}</h1>
                                </div>
                                <div className='bg-[#fddede] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  '>
                                    <h1 className='font-semibold text-[#7e2b2b]'>Total Experiments</h1>
                                    <h1 className='mt-5 font-bold text-[#7e2b2b]'>{exp.texp}</h1>
                                </div>
                            </div>
                        </> : <PostsForm />
                    }
                </div>
            </div>
        </>
    )
}