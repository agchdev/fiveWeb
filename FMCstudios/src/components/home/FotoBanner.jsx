import React from 'react'

const FotoBanner = () => {
  return (
    <div className='flex flex-col relative mt-40'>
      <img className='absolute -top-40 left-30 w-[300px]' src="./src/assets/LOGOREDONDOFIVE.png" alt="" />
      <div className='h-[400px] overflow-hidden'>
        <img src="./src/assets/hitler.png" alt="" />
      </div>
    </div>
  )
}

export default FotoBanner
