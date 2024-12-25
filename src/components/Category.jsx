import React from 'react'
import swimming from '../../public/swimmingpool.jpg'
import cozyhouse from '../../public/cozyhouse.jpg'
import studio from '../../public/studio.jpg'
import luxury from '../../public/luxury.jpg'

const Category = () => {
    return (
        <div className='my-8 mx-4 w-full flex justify-center items-center gap-8 flex-wrap'>

            <div className='relative '>
                <img src={swimming} alt="swimming pool" className='w-[20rem] h-40 rounded-md ' />
                <div className='absolute top-10 bottom-10 left-10 right-10 flex flex-col text-lg p-4 font-semibold justify-center items-center  bg-black/60 text-white hover:scale-x-110 transition-all duration-200 '>
                    <h1>With Swimming Pool</h1>
                    <p>40 Properties</p>
                </div>
            </div>

            <div className='relative '>
                <img src={cozyhouse} alt="cozyhouse" className='w-[20rem] h-40 rounded-md' />
                <div className='absolute top-10 bottom-10 left-10 right-10 flex flex-col text-lg p-4 font-semibold justify-center items-center  bg-black/60 text-white hover:scale-x-110 transition-all duration-200 '>
                    <h1>Cozy Houses</h1>
                    <p>64 Properties</p>
                </div>
            </div>

            <div className='relative '>
                <img src={luxury} alt="Apartments" className='w-[20rem] h-40 rounded-md' />
                <div className='absolute top-10 bottom-10 left-10 right-10 flex flex-col text-lg p-4 font-semibold justify-center items-center  bg-black/60 text-white hover:scale-x-110 transition-all duration-200 '>
                    <h1>Luxury Apartments</h1>
                    <p>16 Properties</p>
                </div>
            </div>

        </div>
    )
}

export default Category
