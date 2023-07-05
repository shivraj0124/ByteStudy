
import React from 'react'
import img2 from '../Images/notesImg.png'
import img3 from '../Images/questionPImg.png'
import img4 from '../Images/experimentsImg.png'
import PostHook from './StudyContext'
import {useNavigate} from 'react-router-dom'

export default function AdminDashB(){
    const navigate = useNavigate()
    const {setPostsP} = PostHook()

    const handleOnclick =(e)=>{
        const innerHtml = e.target.innerHTML
        console.log(innerHtml)
        setPostsP(innerHtml)
        navigate('/PostsForm')
    }
    return(
    <>
            <div className="w-[100%]  h-full px-[10%] py-12 mr-0" >
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

    </div>
            
    </>
    )
}