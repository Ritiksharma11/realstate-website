import React from 'react'
import home2 from '../../public/home2.jpg'
import studio from '../../public/studio.jpg'
import luxury from '../../public/luxury.jpg'

const RecentProperties = () => {
    return (
        <div className='max-w-7xl mx-auto my-4 px-4 flex flex-col justify-center items-center'>
            <h1 className='text-3xl md:text-4xl font-semibold py-2 border-b-2 border-orange-500 mb-5'>Recent Properties</h1>
            <div className='flex justify-center items-center gap-8 flex-wrap'>
                <div className='w-[20rem] border-2 border-gray-300 p-2 rounded-lg'>
                    <img src={home2} alt="home image" className='w-full h-40 object-cover' />
                    <h1 className='text-xl md:text-2xl font-semibold text-orange-500 py-2'>Dhungana Antilia</h1>
                    <p className='font-semibold text-lg'>₹50,00,000</p>
                    <div className='w-full py-2 flex justify-between items-center font-medium text-gray-700'>
                        <h1>1250 sq. ft</h1>
                        <p>4 bedrooms</p>
                    </div>
                    <h1 className='text-justify font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ullam quod dicta eaque, repellendus, aliquam laboriosam iure accusamus placeat ratione libero consectetur. Illo, facilis officia!</h1>
                </div>

                <div className='w-[20rem] border-2 border-gray-300 p-2 rounded-lg'>
                    <img src={studio} alt="home image" className='w-full h-40 object-cover' />
                    <h1 className='text-xl md:text-2xl font-semibold text-orange-500 py-2'>Sharma Studio</h1>
                    <p className='font-semibold text-lg'>₹75,00,000</p>
                    <div className='w-full py-2 flex justify-between items-center font-medium text-gray-700'>
                        <h1>1650 sq. ft</h1>
                        <p>6 bedrooms</p>
                    </div>
                    <h1 className='text-justify font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ullam quod dicta eaque, repellendus, aliquam laboriosam iure accusamus placeat ratione libero consectetur. Illo, facilis officia!</h1>
                </div>

                <div className='w-[20rem] border-2 border-gray-300 p-2 rounded-lg'>
                    <img src={luxury} alt="home image" className='w-full h-40 object-cover' />
                    <h1 className='text-xl md:text-2xl font-semibold text-orange-500 py-2'>Presidio Residence</h1>
                    <p className='font-semibold text-lg'>₹60,00,000</p>
                    <div className='w-full py-2 flex justify-between items-center font-medium text-gray-700'>
                        <h1>1500 sq. ft</h1>
                        <p>5 bedrooms</p>
                    </div>
                    <h1 className='text-justify font-medium'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ullam quod dicta eaque, repellendus, aliquam laboriosam iure accusamus placeat ratione libero consectetur. Illo, facilis officia!</h1>
                </div>
            </div>
        </div>
    )
}

export default RecentProperties