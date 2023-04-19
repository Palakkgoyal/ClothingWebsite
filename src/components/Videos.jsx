import React from 'react'
import { V4, V5 } from '../assets'
import Divider from './Divider'

// const Videos = () => {
//   return (
//     <div className='mb-20'>
//       <Divider text="Our Work" />
//       <div className='gridDone grid grid-flow-col justify-center items-center gap-8 gridTemp marginT'>
//         <video controls className='rounded-2xl w-full object-fill h-96' >
//             <source src={ V5 } type='video/mp4'/>
//         </video>
//         <video controls className='rounded-2xl w-full object-fill h-96' >
//             <source src={ V4 } type='video/mp4'/>
//         </video>
//       </div>
//     </div>
//   )
// }

const Videos = () => {
  return (
    <div className='grid grid-cols-2 gap-7 my-10 mx-7'>
      <div className='bg-[#2ba0c3]  text-white rounded-full w-16 h-16 md:h-64 md:w-64 flex justify-center items-center mx-auto'>
        <h1 className='md:text-3xl'>Our Work</h1>
      </div>
      <video controls className='rounded-2xl w-full object-fill h-96 row-span-2' >
        <source src={V5} type='video/mp4' />
      </video>
      <video controls className='rounded-2xl w-full object-fill h-96' >
        <source src={V4} type='video/mp4' />
      </video>
    </div>
  )
}

export default Videos
