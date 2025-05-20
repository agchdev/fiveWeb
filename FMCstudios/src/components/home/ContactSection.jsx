import React from 'react'
import { Link } from 'react-router-dom'

const ContactSection = () => {
  return (
    <section className="py-20 bg-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-4">Vragen?</h2>
            <p className="text-xl mb-6">
              Wil je meer weten over onze foodtrucks of een offerte aanvragen voor jouw evenement?
              Neem contact met ons op en we helpen je graag verder!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@defoodtruckclub.nl" className="hover:underline">info@defoodtruckclub.nl</a>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+31628074628" className="hover:underline">+31 6 28074628</a>
              </div>
            </div>
            <div className="mt-8">
              <Link 
                to="/contact" 
                className="inline-block bg-white text-orange-500 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors"
              >
                Trek aan de bel
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img 
                src="/images/foodtrucks/image00013.jpeg" 
                alt="Contact Us" 
                className="w-full h-auto rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Onze Diensten</h3>
              <p className="text-gray-600 mb-4">
                Naast foodtrucks bieden we ook aanvullende diensten zoals meubilair, tenten, en entertainment voor een compleet evenement.
              </p>
              <Link 
                to="/diensten" 
                className="inline-block bg-orange-500 text-white font-medium py-2 px-6 rounded-full hover:bg-orange-600 transition-colors"
              >
                Bekijk onze diensten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
