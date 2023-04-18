import React from 'react'
import { allSuits } from '../Constants'

const AllSuits = () => {
  return (
    <div className='flex flex-wrap gap-3 m-6 justify-evenly items-center'>
      {allSuits.map((suit) => {
        return(
          <div className='border-[1px] rounded-tl-2xl'>
            <img src={ suit.img } alt="" className='w-[44vw] h-96 rounded-2xl border-[1px]' />
            <div className=''>
                <h3>{suit.name}</h3>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AllSuits
