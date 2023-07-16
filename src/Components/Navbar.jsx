import React, { useState } from "react";
import img1 from '../assets/uuo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Components/Authcontext";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [auth, setauth] = useAuth();
    const navigate = useNavigate()

    const handleNav = () => {
        setNav(!nav);
    };
    const handleLogOut = () => {
        setauth({
            user: null,
            token: "",
        })
        localStorage.removeItem("auth");
    }
    return (
        <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto mt-0 px-2 text-black'>
            <img src={img1} className='h-[150px] p-0 md:w-[20%] md:h-[220px]  mt-5' />
            <ul className='hidden md:flex'>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' to='/' >Home</Link>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>About</Link>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>Contact</Link>
                {!auth?.user ? (
                    <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' to='/Login' >Login</Link>
                ) : (
                    <>
                        {auth?.user?.role === 1 ? (
                            <><div className='flex flex-row cursor-pointer' onClick={() => navigate('/Admin')} >
                                <li className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' >Admin</li>
                                <li className='mt-2 ml-0' >
                                    <BiUserCircle size={40} />
                                </li>
                                
                            </div>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-row">
                                    <Link className='p-4 pr-0 font-bold uppercase hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' to='/Profile' >{auth?.user?.username}</Link>
                                    <li className="mt-2 cursor-pointer" >
                                        <BiUserCircle size={40} />
                                    </li>

                                    
                                </div>
                            </>
                        )}
                    </>
                )}
            </ul>



            {/* mobile Nav */}
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r ease-in-out duration-300 z-40 bg-gray-200 md:hidden' : 'ease-in-out duration-800 fixed left-[-100%] md:hidden'} onClick={handleNav}>
                <img src={img1} className='absolute top-0 left-0 w-[70%] h-[18%]' />
                <div className={nav ? 'absolute ease-in-out top-32' : 'left-[-100%]'} onClick={handleNav}>
                    <Link to='/'>
                        <li className='pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' >Home</li>
                    </Link>
                    <Link to='About' >
                        <li className='pt-4 pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>About</li>
                    </Link>
                    <Link to='/Contact'>
                        <li className='pt-4  pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' to='/Contact'>Contact</li>
                    </Link>
                    {!auth?.user ? (
                        <Link to='/Login'>
                            <li className='pt-4  pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' >Login</li>
                        </Link>
                    ) : (
                        <>
                            {auth?.user?.role === 1 ? (
                                <><div className='flex flex-row cursor-pointer' onClick={() => navigate('/Admin')} >
                                    <li className='mt-2 ml-6' >
                                        <BiUserCircle size={40} />
                                    </li>
                                    <li className='pt-4  text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={() => navigate('/Admin')} >Admin</li>
                                </div>
                                    <button onClick={handleLogOut} className="w-max mt-16 ml-6 px-6 h-10 rounded-md bg-yellow-300 hover:bg-[#ebeb5a]">
                                        LogOut
                                    </button>
                                </>
                            ) : (
                                <><div className='flex flex-row cursor-pointer' onClick={() => navigate('/profile')} >
                                    <li className='mt-2 ml-6' >
                                        <BiUserCircle size={40} />
                                    </li>
                                    <li className='pt-4 font-bold uppercase text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={() => navigate('/profile')} >{auth?.user?.username}</li>
                                </div>
                                    <button onClick={handleLogOut} className="w-max mt-16 ml-6 px-6 h-10 rounded-md bg-yellow-300 hover:bg-[#ebeb5a]">
                                        LogOut
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>


            </ul>
        </div>
    );
};

export default Navbar;


