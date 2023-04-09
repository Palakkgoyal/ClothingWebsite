import React from 'react'
import { suitCards } from '../Constants'

const Suits = () => {
  return (
    <div className='media-scroller pl-5 pb-6'>
      { suitCards.map(suit => (
        <div key={ suit.key } className='media-element snaps-inline cursor-pointer' >
          <img src={ suit.img } alt={`a girl wearing beautiful suit`} />
          <p>{ suit.description }</p>
        </div>
      )) }
      <div className='flex items-center justify-center'>
        <p className='text-lg md:text-xl lg:text-3xl text-center text-blue-600 cursor-pointer hover:underline my-auto'>View More➤</p>
      </div>
    </div>
  )
}

export default Suits
