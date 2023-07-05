
import React from 'react'
// import img2 from '../../Images/notesImg.png'
// import img3 from '../../Images/questionPImg.png'
// import img4 from '../../Images/experimentsImg.png'
import PostHook from '../StudyContext'
import { useNavigate, Link } from 'react-router-dom'
import { BiSolidDashboard } from 'react-icons/bi'


export default function AdminDashB() {
    const navigate = useNavigate()
    const { setPostsP } = PostHook()

    const handleOnclick = (e) => {
        const innerHtml = e.target.innerHTML
        console.log(innerHtml)
        setPostsP(innerHtml)
        navigate('/PostsForm')
    }
    return (
        <>
            <div className="w-[100%] z-10 h-full max-xl:px-0 px-5 mr-0 h-12 bg-white drop-shadow-2xl">
                <h1 className='w-full text-3xl font-bold m-2'>ByteStudy</h1>
            </div>
            {/* <div className='w-100% bg-gray py-2 text-xl px-4' >
        <h1>
          Dashboard
        </h1>
        
    </div> */}
            <div className='flex flex-row z-5'>
                <div className="h-[700px] w-[300px] max-sm:w-[90%] bg-[#f8f8f8] drop-shadow-2xl text-xl border rounded pl-2 pt-4">
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
                <div className='w-[100%] h-[650px]  drop-shadow-xl m-1 right-0 rounded pl-8 ' >
                    <h1 className='text-2xl font-semibold text-center mt-5 drop-shadow-lg py-2 px-12' >Home</h1>
                    <div className='w-[100%]  mt-10 right-0  pl-8 flex flex-col justify-center items-center'>
                    <div className='grid grid-cols-2 max-sm:grid-row max-sm:gap-2 gap-x-36 gap-y-12 w-[60%] mt-10 justify-items-center ' >
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
                    </div>
                </div> 

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