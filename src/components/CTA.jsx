import React from 'react'

const CTA = ({ text }) => {
  return (
    <div>
      <button className={`border-[1px] py-3 px-8 font-medium text-lg rounded-lg cursor-pointer btn`}>
        {text}
      </button>
    </div>
  )
}


export default CTA
