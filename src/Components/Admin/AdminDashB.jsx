
import React from 'react'
// import img2 from '../../Images/notesImg.png'
// import img3 from '../../Images/questionPImg.png'
// import img4 from '../../Images/experimentsImg.png'
import PostHook from '../StudyContext'
import { useNavigate, Link } from 'react-router-dom'
import { BiSolidDashboard } from 'react-icons/bi'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'


export default function AdminDashB() {
    const navigate = useNavigate()
    const { setPostsP } = PostHook()

    const handleOnclick = (e) => {
        const innerHtml = e.target.innerHTML
        console.log(innerHtml)
        setPostsP(innerHtml)
        navigate('/PostsForm')
    }

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <>
            <div className="w-[100%] z-10 h-max py-2 max-xl:px-0 px-5 mr-0 bg-white drop-shadow-2xl">
                <h1 className='w-full text-3xl font-bold mx-2'>ByteStudy</h1>
                <div onClick={handleNav} className='block md:hidden absolute right-0 top-0 m-5'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
            </div>
        
                    
            <div className='flex flex-row z-5 bg-gray-100 max-md:pb-16'>
                <div className="hidden md:block h-[700px] w-[300px] max-sm:w-[90%] bg-white text-xl border rounded pl-2 pt-4 ">


                    <div className='flex flex-row ml-2'>
                        <h1 className='mt-1 w-[20px]'  ><BiSolidDashboard size='20px'></BiSolidDashboard></h1>
                        <h1 className='p-0 ml-2'>Dashboard</h1>
                    </div>
                    <div className='flex flex-col text-lg m-8' >
                        <Link to='/AdminDashB' className='hover:underline hover:underline-offset-4 decoration-yellow-400' >Home</Link>
                        <Link to='/Admin/Note' className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400'>New Note</Link>
                        <Link to='/Admin/QP' className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400'>New QP</Link>
                        <Link to='/Admin/Experiment' className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400' >New Exp</Link>
                    </div>
                </div>

                <div className={nav ? 'mt-12 fixed left-0 top-0 w-[70%] border-r  bg-white ease-in-out duration-500 p-10 z-40 md:hidden' : 'mt-12 ease-in-out duration-500 fixed left-[-100%] md:hidden'}>


                    <div className='flex flex-row ml-2'>
                        <h1 className='mt-1 w-[20px]'  ><BiSolidDashboard size='23px'></BiSolidDashboard></h1>
                        <h1 className='p-0 ml-2 text-2xl'>Dashboard</h1>
                    </div>
                    <div className='flex flex-col text-xl m-8' >
                        <Link to='/AdminDashB' className='hover:underline hover:underline-offset-4 decoration-yellow-400' >Home</Link>
                        <Link to='/Admin/Note' className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400'>New Note</Link>
                        <Link to='/Admin/QP' className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400'>New QP</Link>
                        <Link to='/Admin/Experiment' className='mt-4 hover:underline hover:underline-offset-4 decoration-yellow-400' >New Exp</Link>
                    </div>
                </div>
                {/* main view */}

                <div className='w-[100%] h-[650px] max-lg:h-max  rounded text-center max-md:pb-16' >
                    <h1 className='text-2xl mt-4' >Home</h1>
                    <div className='mt-10 w-[100%] grid gap-8 gap-y-16 max-lg:pb-16 lg:grid-cols-2 max-lg:grid-rows-4 justify-items-center' >
                        <div className='  bg-[#bce1ff] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  ' >
                            <h1 className='font-semibold  text-[#2b5b83]' >Total Users</h1>
                            <h1 className='mt-5 font-bold text-[#2b5b83]'>230</h1>
                        </div>
                        <div className='bg-[#a9e4ff] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  ' >
                            <h1 className='font-semibold text-[#27617c]'>Total Notes</h1>
                            <h1 className='mt-5 font-bold text-[#27617c]'>230</h1>
                        </div>
                        <div className='bg-[#fff2ce] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  ' >
                            <h1 className='font-semibold text-[#725e26]'>Total Question Papers</h1>
                            <h1 className='mt-5 font-bold text-[#725e26]' >230</h1>
                        </div>
                        <div className='bg-[#fddede] w-[70%] h-[200px] text-center align-middle items-center p-10 text-2xl rounded-md  '>
                            <h1 className='font-semibold text-[#7e2b2b]'>Total Experiments</h1>
                            <h1 className='mt-5 font-bold text-[#7e2b2b]'>230</h1>
                        </div>
                        

                    </div>
                  
                </div>













                    {/* <h1 className='text-2xl font-semibold text-center mt-5 drop-shadow-lg py-2 px-12' >Home</h1>
                    <div className='w-[100%]  mt-10 right-0  pl-8 flex flex-col justify-center items-center'>
                    <div className='grid md:grid-cols-2 max-sm:grid-rows-4 max-sm:gap-2 gap-x-36 gap-y-12 w-[60%] mt-10 justify-items-center ' >
                        <div className='w-[100%] px-30 py-16 flex justify-center items-center bg-white border border-gray-200 drop-shadow-xl text-2xl rounded-md' >
                            <h2>Total Users </h2>
                            <h2 className='ml-2' >56</h2>
                        </div>
                        <div className='w-[100%] px-30 py-16 flex justify-center items-center bg-white border border-gray-200 drop-shadow-xl text-2xl rounded-md' >
                            <h2>Total Notes </h2>
                            <h2 className='ml-2' >56</h2>
                        </div>
                        <div className='w-[100%] px-30 py-16 flex justify-center items-center bg-white border border-gray-200 drop-shadow-xl text-2xl rounded-md' >
                            <h2>Total Question Papers </h2>
                            <h2 className='ml-2' >56</h2>
                        </div>
                        <div className='w-[100%] px-30 py-16 flex justify-center items-center bg-white border border-gray-200 drop-shadow-xl text-2xl rounded-md' >
                            <h2>Total Experiments </h2>
                            <h2 className='ml-2' >56</h2>
                        </div> 
                       
                      
                        </div>
                    </div>*/}
               

            </div>
            {/*
                    <h1  className='text-black text-2xl text-center underline underline-offset-2 decoration-amber-300' >Admin Dashboard</h1>
                <div className='w-full mt-36 bg-white '>
                    <div className='max-w-[1240px]  grid md:grid-cols-3 gap-8'>
                        <div className='w-full  flex flex-col my-4 rounded-lg hover:scale-105 duration-300' >
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img2} alt="/" />
                            
                                <h2 className='text-2xl text-center cursor-pointer' onClick={handleOnclick} >Notes</h2>
                        </div>

                        <div className='w-full flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img3} alt="/" />
                            <h2 className='text-2xl text-center cursor-pointer' onClick={handleOnclick} >Question Papers</h2>

                        </div>

                        <div className='w-full  flex flex-col my-4 rounded-lg hover:scale-105 duration-300'>
                            <img className='w-[100%] h-[80%] mx-auto mt-[-3rem] bg-white' src={img4} alt="/" />
                            <h2 className='text-2xl text-center cursor-pointer' onClick={handleOnclick} >Experiment</h2>

                        </div>

                    </div>
                </div>

    </div> */}

        </>
    )
}