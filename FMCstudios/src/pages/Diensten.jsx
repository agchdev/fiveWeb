import React from 'react'
import { Link } from 'react-router-dom'

const Diensten = () => {
  const services = [
    {
      id: 1,
      name: 'Bedrijfsfeesten',
      image: '/images/foodtrucks/image00009.jpeg',
      description: 'Maak je bedrijfsfeest onvergetelijk met onze foodtrucks. Of het nu gaat om een jaarlijks evenement, een jubileum of een teambuilding dag, wij verzorgen de catering op maat.',
      features: [
        'Flexibele catering voor groepen van 50 tot 1000+ personen',
        'Meerdere foodtrucks mogelijk voor diverse smaken',
        'Inclusief bediening en alle benodigdheden',
        'Optioneel uit te breiden met dranken en meubilair'
      ]
    },
    {
      id: 2,
      name: 'Festivals & Evenementen',
      image: '/images/foodtrucks/image00010.jpeg',
      description: 'Onze foodtrucks zijn de perfecte aanvulling voor elk festival of evenement. Met een breed scala aan foodconcepten kunnen we aan de wensen van al je bezoekers voldoen.',
      features: [
        'Snelle service voor grote aantallen bezoekers',
        'Meerdere uitgiftepunten mogelijk',
        'Flexibele betaalmogelijkheden (cash, pin, munten)',
        'Duurzame verpakkingen en afvalmanagement'
      ]
    },
    {
      id: 3,
      name: 'Bruiloften',
      image: '/images/foodtrucks/image00011.jpeg',
      description: 'Maak jullie trouwdag extra bijzonder met onze stijlvolle foodtrucks. Een unieke en informele manier van catering die jullie gasten zeker zal verrassen.',
      features: [
        'Persoonlijke afstemming van het menu',
        'Stijlvolle presentatie passend bij jullie bruiloftsthema',
        'Flexibele service gedurende de dag of avond',
        'Inclusief bediening en alle benodigdheden'
      ]
    },
    {
      id: 4,
      name: 'Privé Feesten',
      image: '/images/foodtrucks/image00012.jpeg',
      description: 'Voor verjaardagen, tuinfeesten of andere privé gelegenheden bieden onze foodtrucks een ongedwongen en feestelijke catering oplossing.',
      features: [
        'Geschikt voor feesten vanaf 30 personen',
        'All-in prijzen zonder verrassingen achteraf',
        'Persoonlijke afstemming van het menu',
        'Geen afwas of schoonmaak voor de gastheer/vrouw'
      ]
    }
  ]

  const additionalServices = [
    {
      id: 1,
      name: 'Meubilair',
      description: 'Wij kunnen je evenement compleet maken met passend meubilair zoals statafels, zithoeken, parasols en meer.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
        </svg>
      )
    },
    {
      id: 2,
      name: 'Tenten & Overkappingen',
      description: 'Voor evenementen in de buitenlucht bieden we diverse tent- en overkappingsopties aan, van kleine parasols tot grote stretchtenten.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
        </svg>
      )
    },
    {
      id: 3,
      name: 'Entertainment',
      description: 'Maak je evenement compleet met passende entertainment zoals live muziek, DJ\'s of andere acts die we voor je kunnen regelen.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"></path>
        </svg>
      )
    },
    {
      id: 4,
      name: 'Dranken & Bar',
      description: 'Naast eten kunnen we ook de drankvoorziening verzorgen met onze mobiele bars, van koffie en frisdrank tot cocktails en speciaalbieren.',
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="bg-orange-500 py-16 mb-12">
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Diensten</h1>
          <p className="text-xl max-w-3xl mx-auto">
            De Foodtruck Club verzorgt catering op maat voor elk type evenement.
            Ontdek hieronder voor welke gelegenheden je onze foodtrucks kunt inzetten.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img 
                src={service.image} 
                alt={service.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2">{service.name}</h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <h3 className="font-bold text-lg mb-2">Wat we bieden:</h3>
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-orange-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Link 
                  to="/contact" 
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-2 px-4 rounded-full transition-colors"
                >
                  Vraag offerte aan
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Aanvullende Diensten</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naast onze foodtrucks bieden we diverse aanvullende diensten om je evenement compleet te maken.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-orange-50 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-4">Hoe werkt het?</h2>
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-lg">Contact & Wensen</h3>
                    <p className="text-gray-600">Neem contact met ons op en deel je wensen en ideeën voor je evenement.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Offerte op maat</h3>
                    <p className="text-gray-600">Wij stellen een persoonlijke offerte op basis van jouw wensen en budget.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-lg">Bevestiging & Planning</h3>
                    <p className="text-gray-600">Na akkoord bevestigen we de boeking en plannen we alle details.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-lg">Zorgeloos genieten</h3>
                    <p className="text-gray-600">Op de dag zelf regelen wij alles, zodat jij zorgeloos kunt genieten.</p>
                  </div>
                </li>
              </ol>
              <div className="mt-6">
                <Link 
                  to="/contact" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Start met stap 1
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="/images/foodtrucks/image00013.jpeg" 
                alt="Hoe werkt het" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Diensten
