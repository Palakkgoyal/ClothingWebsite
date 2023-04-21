import React from 'react'
import { suitCards } from '../Constants'
import Divider from './Divider'
import { Link } from 'react-router-dom'

const Suits = () => {
  return (
    <div>
      <Divider text="Hand Painted Suits" />

      <div className='media-scroller pl-5 pb-6'>
        {suitCards.map(suit => (
          <Link to={`/all-suits/${ suit.key }`} key={ suit.key }>
            <div className='media-element snaps-inline cursor-pointer' >
              <img src={suit.img} alt={`a girl wearing beautiful suit`} />
              <p>{suit.description}</p>
            </div>
          </Link>
        ))}
        <div className='flex items-center justify-center'>
          <Link to="/all-suits">
            <p className='text-lg md:text-xl lg:text-3xl text-center text-blue-600 cursor-pointer hover:underline my-auto'>View More➤</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Suits
