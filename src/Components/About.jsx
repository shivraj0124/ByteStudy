import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import img1 from '../Images/AboutImg.png'
import img2 from '../Images/AboutLogo.png'
import { BsInstagram, BsGithub } from 'react-icons/bs'
function About() {
    const navigate = useNavigate()
    return (
        <div className=''>
            <div className="w-[100%] flex flex-col  h-full px-[15%] pb-12 mr-0 bg-gray-200" >
                <div className='mt-10'>
                    <div className='flex flex-col md:flex-row'>
                        <div>
                            <p className='text-xl max-md:text-md text-gray-700 md:mr-[20%] justify-between'><h1 className='text-3xl text-gray-900 font-bold pb-5'>Welcome to ByteStudy ,</h1>Your go-to online resource for GPM.
                                We provide comprehensive study materials, including detailed notes, question papers, and interactive experiments to help you excel in your studies. Whether you're preparing for exams or looking to enhance your understanding of complex concepts, we've got you covered.
                            </p>
                            <button className='w-max mt-8 py-2 px-6 bg-yellow-300 rounded-md' onClick={() => navigate('/Departments')}>Explore More</button>
                        </div>

                        <div className='mt-8 '>
                            <img className='rounded-md' src={img1} alt="" />
                        </div>

                    </div>

                </div>
            </div>
            <div className="w-[100%] py-10 h-full md:px-[15%] pb-12 bg-gray-100 flex flex-col items-center" >
                <h1 className='text-center text-2xl font-semibold underline decoration-yellow-500'>Developed By</h1>

                <div className='flex flex-col md:flex-row items-center mt-10 justify-center md:w-[80%] md:space-x-4'>

                    <div className='md:w-[80%] w-[90%] h-max bg-white shadow-lg flex flex-row max-md:flex-col p-5 rounded-md'>
                        <div className='w-[15%] h-[20%] max-md:w-[20%] bg-black p-2 rounded-[50%] '>
                            <img className='w-[100%] h-[100%]' src={img2} alt="" />
                        </div>
                        <div className='md:ml-6 w-[100%] '>
                            <h1 className='text-2xl font-semibold'>Shivraj Kolwankar</h1>
                            <h3 className='text-lg text-gray-600'>Web Developer</h3>
                            <p>

                            </p>
                            <div className='flex flex-row space-x-4 '>
                                <Link to='https://github.com/shivraj0124' className='py-4 cursor-pointer'>
                                    <BsGithub   size={20} />
                                </Link>
                                <Link to='https://instagram.com/_shivraj.24?igshid=MzNlNGNkZWQ4Mg==' className='py-4 cursor-pointer'>
                                    <BsInstagram   size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='max-md:mt-10 md:w-[80%] w-[90%] h-max bg-white shadow-lg flex flex-row max-md:flex-col p-5  rounded-md'>
                        <div className='w-[15%] h-[20%] max-md:w-[20%] bg-black p-2 rounded-[50%] '>
                            <img className='w-[100%] h-[100%]' src={img2} alt="" />
                        </div>
                        <div className='md:ml-6 w-[100%]'>
                            <h1 className='text-2xl font-semibold'>Yash Aghane</h1>
                            <h3 className='text-lg text-gray-600'>Web Developer</h3>
                            <p>

                            </p>
                            <div className='flex flex-row space-x-4 '>
                                <Link to='https://github.com/yashaghane21' className='py-4 cursor-pointer'>
                                    <BsGithub size={20} />
                                </Link>
                                <Link to='https://instagram.com/a_boy_yash?igshid=OGQ5ZDc2ODk2ZA=='  className='py-4 cursor-pointer'>
                                    <BsInstagram  size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                   
                </div>


            </div>

        </div>
    )
}

export default About
