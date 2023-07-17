import React from 'react'
import img1 from '../Images/Contact.png'
import { useNavigate } from 'react-router-dom'
import {toast } from 'react-toastify'
function Contact() {
    const navigate =useNavigate()
    const handleSubmit =(e)=>{
        e.preventDefault()
      toast.success('message sent successfully',{
        autoClose:2000,
      })
      navigate('/')
    }
    return (
        <div className="w-100 mt-0 justify-center pt-16 px-5 bg-gray-200 lg:px-72 md:pb-52 max-md:pb-16" >
            <div className="w-[100%] bg-white flex md:flex-row max-md:flex-col-reverse p-3 max-md:pb-4  pb-8  shadow-xl rounded-md" >
                <div className="w-[60%] max-md:w-[100%] h-auto text-center text-2xl font-semibold p-2 " >
                    <h1 className='font underline underline-offset-2 max-md:mt-5' >Contact</h1>
                    <div className='mt-7 ' >
                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                className="md:w-[80%] w-[100%] border-b-2 border-blue-300  text-black focus:outline-none focus:border-yellow-400 w-100  focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-4"
                                name="name"
                                placeholder="Name"
                                required />

                            <input
                                type="email"
                                className="md:w-[80%] w-[100%] border-b-2 border-blue-300  text-black focus:outline-none focus:border-yellow-400 w-100 focus:bg-white text-lg p-1 placeholder:text-slate-500 mt-3 md:mt-5"
                                name="email"
                                placeholder="Email"
                                required />
                            <textarea className='md:w-[80%] text-lg mt-5 border-2 w-[100%] p-4 border-blue-300 rounded-md focus:border-yellow-400 focus:bg-white focus:outline-none' name="" id="" rows='5' placeholder='Message'></textarea>
                            
                            <button className='w-[100%] md:w-[80%] mt-6 p-2 text-lg bg-yellow-400 hover:bg-yellow-300 rounded-lg' >Send Message</button>

                        </form>
                    </div>

                </div>
                <div className="w-[40%] max-md:w-[100%] h-auto "><img src={img1} className='h-88 md:h-96 w-100 max-md:w-[100%] max-md:h-52 rounded-md' /></div>
            </div>
        </div>
    )
}

export default Contact
