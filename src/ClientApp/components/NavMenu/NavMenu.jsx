import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const NavMenu = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }
    
    return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className="text-3xl">GREEN WORKSPACE</h1>
        <ul className='hidden md:flex items-center'>
            <li className='p-4'>HOME</li>
            <li className='p-4'>PROJECTS</li>
            <li className='p-4'>ABOUT</li>
            <li className='p-4'>CONTACT</li>
        </ul>
        <div className='block md:hidden' onClick={handleNav}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* MobileMenu */}
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] md:hidden'}>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>HOME</li>
                <li className='p-4 border-b border-gray-600'>PROJECTS</li>
                <li className='p-4 border-b border-gray-600'>ABOUT</li>
                <li className='p-4 border-b border-gray-600'>CONTACT</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
    );
}

export default NavMenu;