import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className='py-2 px-4 md:px-8 max-w-7xl mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center text-gray-500 font-medium border-b-2 pb-1'>
                <ul className='flex gap-4 md:gap-5 uppercase'>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
                <ul className='flex gap-4 md:gap-8'>
                    <li className='flex items-center gap-1'><IoMailOutline /> info@sharmars.org</li>
                    <li className='flex items-center gap-1'><IoIosCall /> 1-800-234567</li>
                </ul>
            </div>
            <div className='py-3 flex justify-between'>
                <div>
                    <h1 className='uppercase font-semibold'><span className='text-xl text-gray-800 '>Sharma</span> <sub className='lowercase text-orange-500'>real state</sub></h1>
                </div>
                <div>
                    <ul className='flex'>
                        <div className='hidden md:flex font-semibold items-center gap-10 uppercase' >
                            <li className='hover:border-b-2 border-orange-400 transition-all duration-200'>Home</li>
                            <li className='hover:border-b-2 border-orange-400 transition-all duration-200'>Submit Property</li>
                            <li className='hover:border-b-2 border-orange-400 transition-all duration-200'>Services</li>
                            <li className='hover:border-b-2 border-orange-400 transition-all duration-200'>About</li>
                            <li className='hover:border-b-2 border-orange-400 transition-all duration-200'>Contacts</li>
                        </div>
                        <div className='md:hidden'>
                            {
                                isOpen ? <ImCross onClick={() => setIsOpen(!isOpen)} /> : <FaBars onClick={() => setIsOpen(!isOpen)} />
                            }
                        </div>
                    </ul>
                    <ul className={`absolute z-50 p-5 top-[7rem] text-sm rounded-xl  transition-all duration-500 ${isOpen ? 'right-2 flex' : 'hidden'} bg-black/90 text-orange-400 font-semibold flex-col md:hidden gap-5 uppercase`}>
                        <li className='transition-all duration-200 cursor-pointer'>Home</li>
                        <li className='transition-all duration-200 cursor-pointer'>Submit Property</li>
                        <li className='transition-all duration-200 cursor-pointer'>Services</li>
                        <li className='transition-all duration-200 cursor-pointer'>About</li>
                        <li className='transition-all duration-200 cursor-pointer'>Contacts</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar