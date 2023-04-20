import React from 'react'
import { allSuits } from '../Constants'
import { BiStar } from "react-icons/bi";

const AllSuits = () => {
  return (
    <div className='mx-2'>
      <div className='my-2'>
        <h1 className='font-sans font-bold text-xl'>Suits</h1>
        <p className='text-[10px] text-[#565959] md:text-xs'>Prices and other details may vary according to your customization</p>
      </div>
      <div className='grid grid-cols-2 gap-2 justify-evenly items-center'>
        {allSuits.map((suit) => {
          return (
            <div className=' rounded-t-md'>
              <img src={ suit.img } alt="" className='w-[90vw] h-40 rounded-t-md border-[1px] sm:h-80' />
              <div className='border-[1px] text-center px-2 py-4'>
                <h3 className='font-medium text-[#0F1111] text-sm sm:font-semibold md:text-lg'>{suit.name}</h3>
                <h5 className='text-sm ellipsis h-11 md:hidden'>{suit.shortD}</h5>
                <h5 className='hidden md:block text-sm ellipsis h-11'>{suit.description}</h5>
                <div className='flex items-center justify-center md:text-xl'>
                  <BiStar />
                  <BiStar />
                  <BiStar />
                </div>
                <div className='flex items-center text-sm text-[#565959] justify-evenly mt-2 md:justify-center md:gap-2'>
                  <h3 className='text-2xl text-[#0F1111] self-start text-start font-medium flex justify-start md:text-3xl'><span className='text-sm mt-[2px]'>₹</span>{suit.price}</h3>
                  <p className='text-sm pb-1 self-end md:text-base'><strike>₹1,600</strike></p>
                </div>
                <p className='font-light text-[#565959] text-xs mt-3'>Global Delivery by KiratFloral</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllSuits

