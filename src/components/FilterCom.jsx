import React from 'react'

const FilterCom = () => {
    return (
        <div className='lg:hidden'>
            <div className='min-h-full min-w-full z-10 fixed bg-white'>
                <h3
                    className='text-base font-bold leading-4 text-[#0F1111] mt-4'>
                    Colors
                </h3>
                <div className='ml-1 mt-2 flex flex-col items-start'>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "red" })}>
                        Red
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "green" })}>
                        Green
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "yellow" })}>
                        Yellow
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "blue" })}>
                        Blue
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "purple" })}>
                        Purple
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "orange" })}>
                        Orange
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "white" })}>
                        White
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "brown" })}>
                        Brown
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() => setSearchParam({ color: "pink" })}>
                        Pink
                    </button>
                    <button
                        className='cursor-pointer hover:underline my-3'
                        onClick={() =>
                            setSearchParam({})}>
                        Clear Filter
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FilterCom
