import React from 'react'
import { allSuits } from '../Constants'

const AllSuits = () => {
  return (
    <div className='mx-2'>
      <div className='my-2'>
        <h1 className='font-sans font-bold text-xl'>Suits</h1>
        <p className='text-[10px] text-[#565959]'>Prices and other details may vary according to your customization</p>
      </div>
      <div className='grid grid-cols-2 gap-2 justify-evenly items-center'>
        {allSuits.map((suit) => {
          return (
            <div className=' rounded-t-md'>
              <img src={suit.img} alt="" className='w-[90vw] h-40 md:w-[44vw] md:h-96 rounded-t-md border-[1px]' />
              <div className='border-[1px] text-center px-2 py-4'>
                <h3 className='font-medium text-[#0F1111] text-sm'>{suit.name}</h3>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AllSuits

