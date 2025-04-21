import React from 'react'
import TextChange from '../components/home/TextChange'
import Video from '../components/home/Video'
import OnlyText from '../components/home/OnlyText'

const Home = () => {

  return (
    <>
      <div className='w-full bg-orange-50 '>
        <TextChange />
        <Video />
        <OnlyText />
      </div>
    </>
  )
}

export default Home
