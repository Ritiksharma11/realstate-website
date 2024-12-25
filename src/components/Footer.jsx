import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='bg-black/90 py-8 px-5 lg:px-10'>
            <div className='max-w-7xl w-full mx-auto flex flex-wrap gap-10 justify-between items-center'>
                <div>
                    <h1 className='uppercase font-semibold'><span className='text-xl text-white'>Sharma</span> <sub className='lowercase text-orange-500'>real state</sub></h1>
                    <div className='flex gap-5 items-center text-white py-4'>
                        <FaFacebook />
                        <FaTwitter />
                        <FaLinkedin />
                        <FaGooglePlusG />
                    </div>
                </div>

                <div>
                    <h1 className='text-white font-semibold text-lg uppercase'>Useful Links</h1>
                    <div className=''>
                        <ul className='text-white font-medium flex flex-col gap-2 pt-2'>
                            <li className='flex items-center gap-2'><FaArrowRight className='text-orange-500' /> Properties</li>
                            <li className='flex items-center gap-2'><FaArrowRight className='text-orange-500' /> Amenities</li>
                            <li className='flex items-center gap-2'><FaArrowRight className='text-orange-500' /> Rentals</li>
                            <li className='flex items-center gap-2'><FaArrowRight className='text-orange-500' /> RealState Agents</li>
                        </ul>
                    </div>
                </div>

                <div>
                    <h1 className='uppercase text-lg text-white font-semibold'>Newsletter</h1>
                    <p className='text-white py-4'>Keep up with the latest company news and events. <br /> Enter your e-mail and subscribe to our newsletter.</p>
                    <div className='flex gap-2 items-center'>
                        <IoMdMail className='text-white' />
                        <input type="text" placeholder='Type your E-mail...' className='py-1 px-2 border-none outline-none' />
                        <span className='bg-orange-600 text-white ml-[-12px] py-1 px-2 font-medium'><button>Subscribe</button></span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
