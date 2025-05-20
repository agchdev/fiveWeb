import React from 'react'
import { Link } from 'react-router-dom'

const OverOns = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Jan de Vries',
      role: 'Oprichter & CEO',
      image: '/images/foodtrucks/image00008.jpeg',
      bio: 'Jan richtte De Foodtruck Club op in 2018 na jaren ervaring in de horeca. Met een passie voor goed eten en evenementen, bouwde hij het bedrijf uit tot wat het nu is.'
    },
    {
      id: 2,
      name: 'Lisa Jansen',
      role: 'Operationeel Manager',
      image: '/images/foodtrucks/image00007.jpeg',
      bio: 'Lisa zorgt ervoor dat alle operationele zaken soepel verlopen. Van planning tot uitvoering, zij houdt het overzicht en zorgt dat elk evenement perfect verloopt.'
    },
    {
      id: 3,
      name: 'Mark Bakker',
      role: 'Chef-kok',
      image: '/images/foodtrucks/image00006.jpeg',
      bio: 'Mark is onze creatieve chef die alle menu\'s ontwikkelt. Met zijn achtergrond in sterrenrestaurants weet hij hoe je street food naar een hoger niveau tilt.'
    },
    {
      id: 4,
      name: 'Emma de Jong',
      role: 'Evenementen Coördinator',
      image: '/images/foodtrucks/image00005.jpeg',
      bio: 'Emma is het eerste aanspreekpunt voor klanten en zorgt dat alle wensen perfect worden vertaald naar een passend foodtruck concept voor elk evenement.'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="bg-orange-500 py-16 mb-12">
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Over Ons</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Maak kennis met De Foodtruck Club, jouw partner voor unieke catering ervaringen op elke locatie.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-16 gap-8">
          <div className="md:w-1/2">
            <img 
              src="/images/foodtrucks/image00001.jpeg" 
              alt="Over De Foodtruck Club" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Ons Verhaal</h2>
            <p className="text-gray-600 mb-4">
              De Foodtruck Club is in 2018 opgericht vanuit een passie voor goed eten en unieke evenementen. 
              Wat begon als één foodtruck is uitgegroeid tot een complete vloot van diverse foodtrucks, 
              elk met hun eigen concept en karakter.
            </p>
            <p className="text-gray-600 mb-4">
              Onze missie is om catering te veranderen. Weg van de traditionele buffetten en richting 
              interactieve, verse en kwalitatieve food experiences die je gasten zullen bijblijven.
            </p>
            <p className="text-gray-600">
              Met ons team van gepassioneerde foodies, chefs en event professionals zorgen we voor 
              een zorgeloze en smaakvolle ervaring op elk evenement, groot of klein.
            </p>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ons Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maak kennis met de mensen achter De Foodtruck Club die elke dag zorgen voor een perfecte ervaring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Onze Missie</h3>
            <p className="text-gray-600 text-center">
              Het transformeren van traditionele catering naar interactieve, verse en kwalitatieve food experiences die mensen samenbrengen.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Onze Visie</h3>
            <p className="text-gray-600 text-center">
              De eerste keuze zijn voor iedereen die op zoek is naar unieke catering oplossingen die indruk maken en lang bijblijven.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-center mb-4">
              <svg className="w-16 h-16 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-center">Onze Waarden</h3>
            <p className="text-gray-600 text-center">
              Kwaliteit, creativiteit, betrouwbaarheid en duurzaamheid staan centraal in alles wat we doen bij De Foodtruck Club.
            </p>
          </div>
        </div>
        
        <div className="bg-orange-50 p-8 rounded-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Duurzaamheid</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bij De Foodtruck Club nemen we onze verantwoordelijkheid voor het milieu serieus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Onze duurzaamheidsinitiatieven:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Biologisch afbreekbare verpakkingen en servies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lokale en seizoensgebonden ingrediënten</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Minimaliseren van voedselverspilling</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Elektrische voertuigen waar mogelijk</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="/images/foodtrucks/image00004.jpeg" 
                alt="Duurzaamheid" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link 
              to="/contact" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Neem contact met ons op
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverOns
