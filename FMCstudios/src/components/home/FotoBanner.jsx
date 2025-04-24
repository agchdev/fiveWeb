import React from 'react'

const FotoBanner = () => {
  return (
    <div className='flex flex-col relative mt-40 -top-50'>
      <img className='absolute -top-10 left-10 w-[130px] md:-top-19 md:left-20 md:w-[200px] lg:-top-25 lg:left-30 lg:w-[250px] xl:-top-30 xl:left-30 xl:w-[300px] z-10 transition-all duration-400 ease-super' src="./src/assets/LOGOREDONDOFIVE.png" alt="" />
      <div className='h-[500px] overflow-hidden bg-[url("./src/assets/camisetas.jpeg")] bg-position-[center_top_-10rem] relative z-0'>
      </div>
    </div>
  )
}

export default FotoBanner
