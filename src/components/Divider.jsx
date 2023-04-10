import React from 'react'

const Divider = ( { text } ) => {
  return (
    <div className='bg-[#f0f0f0] text-xl w-full py-8 border-[1px] md:text-4xl md:my-5 text-center font-extrabold'>
      {text}
    </div>
  )
}

export default Divider
