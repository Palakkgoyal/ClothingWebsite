import React from 'react'

const Sidebar = () => {
  return (
    <div className='hidden lg:block min-w-[20vw] relative'>
      <div className='fixed'>
        <div>
          <h3 className='text-sm font-bold leading-4 text-[#0F1111]'>Category</h3>
          <ul>
            <li>Suits</li>
            <li>Jutti</li>
            <li>T-shirts</li>
            {/* <li></li> */}
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
