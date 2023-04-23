import React from 'react'
import { useParams } from 'react-router-dom'
import { allSuits } from '../Constants'
import BuyNowBtn from './BuyNowBtn'
import { BsShareFill } from "react-icons/bs";
import CantShare from './CantShare';

const SuitDetailCom = () => {
    const param = useParams()
    const suit = allSuits[param.id - 1];

    return (
        <div className='mt-3 mb-20'>
            <p className='text-base text-[#565959] font-normal mx-3 leading-loose'>{suit.shortD}</p>
            <img src={suit.img}
                alt={suit.shortD}
                className='w-full h-[550px] bg-[#D5D9D9] p-2'
            />
            <div className='flex justify-end mr-7 items-center mt-3 text-lg'>
                <span className='hover:bg-[#D3D3D3] h-12 w-12 rounded-full flex items-center justify-center'>
                    <BsShareFill className='' />
                </span>
            </div>
            <div className='flex flex-col justify-center items-start border-t-4 border-b-2 my-4 py-4 '>
                <div className='flex justify-start items-center mx-3'>
                    {
                        suit.discount && <p
                            className='text-[#CC0C39] text-5xl mr-2 font-light font-[system-ui]'
                        >
                            -{suit.discount}%
                        </p>
                    }
                    <h3 className='text-6xl text-[#0F1111] self-start text-start font-medium flex justify-start md:text-3xl'>
                        <span className='text-xl mt-[2px]'>₹</span>
                        {suit.price}
                    </h3>
                </div>
                <div className='mx-5 mt-2 text-[#565959]'>
                    <p>
                        M.R.P..₹
                        <strike>{suit.totalP}</strike>
                    </p>
                </div>
            </div>
            <BuyNowBtn />
        </div>
    )
}

export default SuitDetailCom
