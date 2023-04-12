import React from 'react'
import { V4, V5 } from '../assets'
import Divider from './Divider'

const Videos = () => {
  return (
    <div className='mb-20'>
      <Divider text="Our Work" />
      <div className='gridDone grid grid-flow-col justify-center items-center gap-8 gridTemp marginT'>
        <video controls className='rounded-2xl w-full object-fill h-96' >
            <source src={ V5 } type='video/mp4'/>
        </video>
        <video controls className='rounded-2xl w-full object-fill h-96' >
            <source src={ V4 } type='video/mp4'/>
        </video>
      </div>
    </div>
  )
}

export default Videos
