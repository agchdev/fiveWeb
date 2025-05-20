import React from 'react'

const Video = () => {
    return (
        <div className='bg-orange-50 relative w-[90%] h-[400px] xl:h-[712.5px] mx-auto overflow-hidden rounded-[20px] xl:rounded-[60px]'>
            <div className='relative'>
                <h2 className='font-anton big-title font-bold text-neutral-900 transition-all duration-400 ease-super top-0 right-0 bg-orange-50 rounded-bl-[20px] xl:rounded-bl-[60px] px-5 absolute'>HAPPEN</h2>
            </div>
            <div className='h-full w-full'>
                <img className='object-cover w-full h-full' src="./src/assets/hitler.png" alt="" />
            </div>
        </div>
    )
}

export default Video
