// import React from 'react'
// import { useParams } from 'react-router-dom'
// import { suitCards } from '../Constants'

// const SuitDetail = () => {
//   const param = useParams()
  
//   return (
//     <div>
//       {param.id}
//        {/* {suitCards[param + 1]} */}
//        <img src={suitCards[param.id - 1].img} alt="" />
//     </div>
//   )
// }

// export default SuitDetail

import React from 'react'
import SuitDetailCom from '../components/SuitDetailCom'

const SuitDetail = () => {
  return (
    <div>
      <SuitDetailCom />
    </div>
  )
}

export default SuitDetail
