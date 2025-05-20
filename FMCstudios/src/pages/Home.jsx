import React from 'react'
import Hero from '../components/home/Hero'
import FoodtruckConcepts from '../components/home/FoodtruckConcepts'
import Benefits from '../components/home/Benefits'
import RecentEvents from '../components/home/RecentEvents'
import ContactSection from '../components/home/ContactSection'

const Home = () => {
  return (
    <>
      <Hero />
      <FoodtruckConcepts />
      <Benefits />
      <RecentEvents />
      <ContactSection />
    </>
  )
}

export default Home
