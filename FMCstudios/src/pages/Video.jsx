import React from 'react'

const Video = () => {
    return (
        <div className='relative w-[90%] h-[400px] xl:h-[712.5px] mx-auto overflow-hidden rounded-[20px] xl:rounded-[60px]'>
            <div>
                <h2 className='font-anton text-[5rem] md:text-[6rem] lg:text-[6rem] xl:text-[11.5rem] font-bold text-neutral-900 transition-all duration-400 ease-super top-0 right-0 bg-orange-50 rounded-[20px] px-5 absolute'>HAPPEN</h2>
            </div>
            <div className='corner absolute h-[10px]'></div>
            <div className='h-full'>
                <img className='object-cover w-full h-full' src="./src/assets/hitler.png" alt="" />
            </div>
        </div>
    )
}

export default Video
