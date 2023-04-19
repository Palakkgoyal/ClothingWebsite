import React from 'react'
// import { heroImg, heroImgWithoutBg } from '../assets'
import CTA from './CTA'
import { Link } from 'react-router-dom'

import { blueSuit } from '../assets'

// const Hero = () => {
//   return (
//     <div className='mt-5 flex h-[100vh] w-[100vw] text-white'>

//       <div className={`w-full h-[100vh] bg-center bg-no-repeat bg-cover px-4 sm:px-12 md:hidden`}
//         style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${heroImg}')` }}
//       >
//         <div className='mt-24 mb-10 sm:mt-44 sm:mx-auto'>
//           <h1 className='font-[Poppins] text-3xl max-w-[400px] sm:text-4xl'>Elevate your style with our handpainted suits for any event</h1>
//         </div>
//         <div>
//           <CTA text="View Suits" />
//         </div>
//       </div>


//       <div className={`hidden md:flex px-16 justify-end flex-row`}>
//         <div className='flex flex-col'>
//           <h1 className='relative font-[poppins] text-5xl text-black font-semibold max-w-[430px] z-10 mt-14 mb-9  lg:max-w-[700px] lg:mt-28 leading-snug'
//             style={{ textShadow: '2px 1px black' }}
//           ><i>Elevate style with our handpainted suits for any event </i></h1>
//           <div className="hidden lg:block">
//             <Link to="/all-suits">
//               <CTA text="Find Your Perfect Ethnic Look" />
//             </Link>
//           </div>
//           <div className='lg:hidden'>
//           <CTA text="View Suits" />
//           </div>
//         </div>
//         <div className='flex max-w-[300px] lg:max-w-[400px]'>
//           <img src={heroImgWithoutBg} alt="Beautiful girl wearing yellow coloured hand painted suit"
//             className='lg:ml-11' />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

const Hero = () => {
  return (
    <div className='flex justify-center my-5'>
      <div className="heroBg text-white min-w-[100vw] text-center min-h-[50vh] sm:min-h-[70vh] flex justify-center items-center flex-col py-28 lg:py-40">
        <h1 className="w-full heroFont text-2xl sm:text-[34px] md:text-6xl md:px-6 lg:text-7xl">Best Hand Painted Suits</h1>
        <p className='text-xs w-56 mt-2 sm:text-sm sm:w-80 md:text-xl md:w-[600px]'>A place where you can customize not only your dress but also juttis as you wish</p>
          <Link to="/all-suits" className='sm:hidden mt-3'>
  //           <CTA text="View Suits" />
  //      </Link>
          <Link to="/all-suits" className='hidden sm:block mt-5'>
  //           <CTA text="Find Your Perfect Ethnic Look" className="font-bold" />
  //      </Link>
      </div>
    </div>
  )
}


export default Hero