import React from 'react'
import { Link } from 'react-router-dom'

const BuyNowBtn = () => {
  return (
    <div className='flex justify-center items-start flex-col mx-6'>
      <button className='py-[10px] bg-yellow-300 rounded-3xl cursor-pointer hover:bg-yellow-400 mb-4 w-full active:bg-yellow-500'>
        Add to Cart
      </button>
      <button className='py-[10px] bg-orange-400 rounded-3xl cursor-pointer hover:bg-orange-500 w-full active:bg-orange-600'>
        Buy Now
      </button>
      <Link to="/suit-customization" className='text-blue-600 hover:text-blue-500 active:text-blue-600 cursor-pointer font-medium text-xl mt-6 underline leading-relaxed'>
        Customize Your Suit  ➤
      </Link>
    </div>
  )
}

export default BuyNowBtn
