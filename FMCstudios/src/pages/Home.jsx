import React from 'react'
import TextChange from '../components/home/TextChange'
import Video from './Video'

const Home = () => {

  return (
    <>
      <div className='w-full h-screen bg-orange-50 '>
        <TextChange />
        <Video />
      </div>
    </>
  )
}

export default Home
