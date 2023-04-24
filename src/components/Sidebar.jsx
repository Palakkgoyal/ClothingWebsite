import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

const Sidebar = () => {
  const [searchParam, setSearchParam] = useSearchParams()
  return (
    <div className='hidden lg:block min-w-[20vw] relative'>
      <div className='mt-5 ml-9'>
        <div>
          <h3
            className='text-base font-bold leading-4 text-[#0F1111]'>
            Category
          </h3>
          <ul className='ml-1 mt-2 flex flex-col items-start'>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ category: "suit" })}>
              Suits
            </button>
            <button className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ category: "suit-and-jutti-set" })}>
              Suit and Jutti Set
            </button>
          </ul>
          <h3
            className='text-base font-bold leading-4 text-[#0F1111] mt-4'>
            Colors
          </h3>
          <div className='ml-1 mt-2 flex flex-col items-start'>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "red" })}>
              Red
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "green" })}>
              Green
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "yellow" })}>
              Yellow
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "blue" })}>
              Blue
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "purple" })}>
              Purple
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "orange" })}>
              Orange
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "white" })}>
              White
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "brown" })}>
              Brown
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() => setSearchParam({ color: "pink" })}>
              Pink
            </button>
            <button
              className='cursor-pointer hover:underline'
              onClick={() =>
                setSearchParam({})}>
              Clear Filter
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar