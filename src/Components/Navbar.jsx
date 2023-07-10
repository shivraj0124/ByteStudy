import React, { useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../Components/Authcontext";
const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [auth, setauth] = useAuth();
    const navigate=useNavigate()
    
    const handleNav = () => {
        setNav(!nav);
    };
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto mt-0 px-4 text-black'>
            <h1 className='w-full text-3xl font-bold underline underline-offset-2 decoration-wavy decoration-yellow-400'>ByteStudy</h1>
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
                                    <> <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' to='/Profile' >{auth?.user?.name}</Link>
                            </>
                        )}
                    </>
                )}

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[80%] h-full border-r  bg-white ease-in-out duration-500 z-40 md:hidden' : 'ease-in-out duration-500 fixed left-[-100%] md:hidden'} onClick={handleNav}>
                <h1 className='w-full text-3xl font-bold text-gray-700 underline underline-offset-2 decoration-wavy decoration-yellow-400 mt-8 ml-8 pb-4'>ByteStudy</h1>
                <Link to='/'>
                    <li className='pt-4  pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' >Home</li>
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
                                    <li className='pt-4  text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={()=> navigate('/Admin')} >Admin</li>
                                    
                                </div>
                                </>
                        ) : (
                                    <><div className='flex flex-row cursor-pointer' onClick={() => navigate('/profile')} >
                                        <li className='mt-2 ml-6' >
                                            <BiUserCircle size={40} />
                                        </li>
                                        <li className='pt-4  text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' onClick={() => navigate('/profile')} >{auth?.user?.username}</li>

                                    </div>
                            </>
                        )}
                    </>
                )}


            </ul>
        </div>
    );
};

export default Navbar;


