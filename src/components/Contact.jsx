import React from 'react'
import houses from '../../public/houses.jpg'

const Contact = () => {
    return (
        <div className='mt-8'>
            <div className='relative'>
                <img src={houses} alt="image" className='h-[85vh] w-full' />
                <div className='absolute z-50 top-0 bottom-0 left-0 right-0 w-full h-full bg-black/70'>
                    <div className='max-w-7xl mx-auto px-4 flex flex-col gap-5 md:gap-10 justify-center items-center mt-10 w-[80vw]'>
                        <h1 className='text-white font-bold text-2xl md:text-3xl mb-5'>Get In Touch</h1>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center'>
                            <input type="text" placeholder='First Name...' className='border-2 border-white outline-none bg-transparent py-2 px-4 text-white w-[60vw] md:w-[30vw] md:text-lg md:font-semibold rounded-lg ' />
                            <input type="text" placeholder='Last Name...' className='border-2 border-white outline-none bg-transparent py-2 px-4 text-white w-[60vw] md:w-[30vw]  md:text-lg md:font-semibold rounded-lg' />
                        </div>
                        <div className='flex flex-col md:flex-row gap-5 md:gap-10 items-center'>
                            <input type="number" placeholder='Phone Number...' className='border-2 border-white outline-none bg-transparent py-2 px-4 text-white w-[60vw] md:w-[30vw]  md:text-lg md:font-semibold rounded-lg' />
                            <input type="email" placeholder='Email...' className='border-2 border-white outline-none bg-transparent py-2 px-4 text-white w-[60vw] md:w-[30vw]  md:text-lg md:font-semibold rounded-lg' />
                        </div>
                        <textarea name="" id="" className='w-[60vw] md:w-[63vw] bg-transparent text-white border-2 border-white p-2 outline-none rounded-lg md:text-lg md:font-semibold' placeholder='Message...' ></textarea>
                        <button className='bg-orange-600 text-white py-1 px-3 rounded-md md:text-lg font-semibold'>Send Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact