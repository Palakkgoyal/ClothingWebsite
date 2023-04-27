import React from 'react'
import { toggleFilterPage, state } from '../store';
import { useSnapshot } from 'valtio';
import { RxCross2 } from "react-icons/rx"
import { useSearchParams } from 'react-router-dom';


const FilterCom = () => {
    const [searchParam, setSearchParam] = useSearchParams()
    const snap = useSnapshot(state)
    const hideOrNot = snap.filterPage ? "block" : "hidden";

    return (
        <div className={`lg:hidden ${hideOrNot}`}>
            <div className='min-h-full min-w-full z-10 fixed bg-white'>

                <div className='flex justify-end'>
                    <div
                        className='flex justify-center items-center mt-7 mr-5 text-3xl rounded-full hover:bg-slate-300 w-14 h-14'
                        onClick={toggleFilterPage}>
                        <RxCross2 />
                    </div>
                </div>

                <div className='ml-8'>
                    <h3
                        className='text-lg font-bold leading-4 text-[#0F1111] mt-4'>
                        Colors
                    </h3>
                    <div className=''>
                        <div className='mt-2 grid grid-cols-2 max-w-[340px]'>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "red" })}>
                                Red
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "green" })}>
                                Green
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "yellow" })}>
                                Yellow
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "blue" })}>
                                Blue
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "purple" })}>
                                Purple
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "orange" })}>
                                Orange
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "white" })}>
                                White
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "brown" })}>
                                Brown
                            </button>
                            <button
                                className='cursor-pointer hover:underline my-3 flex justify-start'
                                onClick={() => setSearchParam({ color: "pink" })}>
                                Pink
                            </button>
                            {/* <button
                                className='cursor-pointer hover:underline my-3'
                                onClick={() =>
                                    setSearchParam({})}>
                                Clear Filter
                            </button> */}
                        </div>
                    </div>
                </div>
                {/* <button onClick={toggleFilterPage}>Close this page</button> */}
            </div>
        </div>
    )
}

export default FilterCom
