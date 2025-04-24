import React from 'react'
import TextChange from '../components/home/TextChange'
import Video from '../components/home/Video'
import OnlyText from '../components/home/OnlyText'
import FotoBanner from '../components/home/FotoBanner'

const Home = () => {

  return (
    <>
      <div className='w-full bg-orange-50 pb-30 relative z-5 rounded-b-[50px]'>
        <TextChange />
        <Video />
        <OnlyText />
      </div>
        <FotoBanner />
    </>
  )
}

export default Home
