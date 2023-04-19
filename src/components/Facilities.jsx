import React from 'react'
import Divider from './Divider'
import flower from '../assets/flower.png'

const Facilities = () => {
    return (
        <div>
            <Divider text="Facilities Offered" />
            <div className='flex justify-center items-center'>
                <img className='hidden lg:block flip' src={flower} alt="Beautiful multi flower sketch" />

                <ul className='flex justify-center mx-7 font-[poppins] flex-col my-8 text-sm sm:text-lg font-bold'>
                    <li className='py-4 px-12 sm:py-6 md:px-16 lg:px-40 sm:px-9 my-2 rounded-lg cursor-default'
                        style={{ backgroundImage: 'linear-gradient(to right top, #e5cae4, #ceb9d6, #b6a9c9, #9e99bb, #858aac)' }}>
                        🧵Stitching Available ✅
                    </li>
                    <li className='py-4 px-12 sm:py-6 md:px-16 lg:px-40 sm:px-9 my-2 rounded-lg cursor-default'
                        style={{ backgroundImage: 'linear-gradient(to right top, #e5cae4, #ceb9d6, #b6a9c9, #9e99bb, #858aac)' }}>
                        💯 100% Hand Painted ✅
                    </li>
                    <li className='py-4 px-12 sm:py-6 md:px-16 lg:px-40 sm:px-9 my-2 rounded-lg cursor-default'
                        style={{ backgroundImage: 'linear-gradient(to right top, #e5cae4, #ceb9d6, #b6a9c9, #9e99bb, #858aac)' }}>
                        👌Best Quality Fabric ✅
                    </li>
                    <li className='py-4 px-12 sm:py-6 md:px-16 lg:px-40 sm:px-9 my-2 rounded-lg cursor-default'
                        style={{ backgroundImage: 'linear-gradient(to right top, #e5cae4, #ceb9d6, #b6a9c9, #9e99bb, #858aac)' }}>
                        🌍Global Delivery ✅
                    </li>
                </ul>
                <img className='hidden lg:block' src={flower} alt="Beautiful multi flower sketch" />
            </div>
        </div>
    )
}

export default Facilities
