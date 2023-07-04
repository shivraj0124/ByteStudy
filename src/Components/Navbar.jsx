import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link} from 'react-router-dom'
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    // text-[#FFE700]
    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto mt-0 px-4 text-black'>
            <h1 className='w-full text-3xl font-bold underline underline-offset-2 decoration-wavy decoration-yellow-400'>ByteStudy</h1>
            <ul className='hidden md:flex'>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer' to='/' >Home</Link>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>About</Link>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>Contact</Link>
                <Link className='p-4 hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'><Link to='/Login' >Login</Link></Link>

            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r  bg-white ease-in-out duration-500 z-40' : 'ease-in-out duration-500 fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-gray-700 underline underline-offset-2 decoration-wavy decoration-yellow-400 mt-8 ml-8 pb-4'>ByteStudy</h1>
                <li className='pt-4  pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>Home</li>
                <li className='pt-4 pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>About</li>
                <li className='pt-4  pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'>Contact</li>
                <li className='pt-4  pl-8 text-black hover:underline hover:underline-offset-4 decoration-yellow-400 cursor-pointer'><Link to='/Login' >Login</Link></li>

            </ul>
        </div>
    );
};

export default Navbar;


