import React from 'react'
import { AiFillCaretDown } from "react-icons/ai";
import { toggleFilterPage, state } from '../store';
import { useSnapshot } from 'valtio';

const FilterBar = () => {
    const snap = useSnapshot( state )
    const hideOrNot = snap.filterPage? "block" : "hidden";
    return (
        <div className={``}>
            <div className='lg:hidden flex justify-between px-4 py-4 border-b-2'>
                <h3 className='text-lg sm:pl-6 md:pl-10'>KiratFlorals</h3>
                <div className='flex text-blue-700 cursor-pointer hover:filterShadow pl-5 sm:pl-14 border-l-2 sm:pr-6 md:pr-10 justify-self-end'>
                    <button className='text-xl md:text-2xl' onClick={ toggleFilterPage }>Filter</button>
                    <div className='flex items-center'>
                        <AiFillCaretDown />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBar
