import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/foodtrucks/image00001.jpeg" 
          alt="Food Truck Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Let's change catering!
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          De Foodtruck Club is hèt adres voor stijlvolle foodtrucks in eigen beheer.
          Originele catering voor elk evenement, al vanaf €7,5 pp.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/foodtrucks" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Onze Foodtrucks
          </Link>
          <Link 
            to="/contact" 
            className="bg-transparent hover:bg-white hover:text-orange-500 text-white font-bold py-3 px-8 rounded-full border-2 border-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero
