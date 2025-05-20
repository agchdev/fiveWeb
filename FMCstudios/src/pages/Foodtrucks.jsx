import React from 'react'
import { Link } from 'react-router-dom'

const Foodtrucks = () => {
  const foodtrucks = [
    {
      id: 1,
      name: 'Pizza Foodtruck',
      image: '/images/foodtrucks/image00002.jpeg',
      description: 'Authentieke Italiaanse pizza\'s bereid in een houtgestookte oven. Onze pizzabakkers maken verse pizza\'s met de beste ingrediënten, direct voor de ogen van je gasten.',
      features: ['Houtgestookte oven', 'Verse ingrediënten', 'Diverse toppings', 'Vegetarische opties', 'Glutenvrije opties mogelijk'],
      price: 'Vanaf €9,50 per persoon'
    },
    {
      id: 2,
      name: 'BBQ Foodtruck',
      image: '/images/foodtrucks/image00003.jpeg',
      description: 'Sappige burgers en gegrilde specialiteiten van de Amerikaanse BBQ. Perfect voor festivals, bedrijfsfeesten en evenementen waar je gasten willen genieten van heerlijk gegrild vlees.',
      features: ['Verse hamburgers', 'Pulled pork', 'Spareribs', 'Gegrilde groenten', 'Huisgemaakte sauzen'],
      price: 'Vanaf €11,00 per persoon'
    },
    {
      id: 3,
      name: 'Pasta Foodtruck',
      image: '/images/foodtrucks/image00004.jpeg',
      description: 'Verse pasta\'s met huisgemaakte sauzen en Italiaanse kruiden. Onze pasta wordt ter plekke bereid en geserveerd in diverse smaken en varianten.',
      features: ['Diverse pasta soorten', 'Huisgemaakte sauzen', 'Vegetarische opties', 'Verse kruiden', 'Parmezaanse kaas'],
      price: 'Vanaf €8,50 per persoon'
    },
    {
      id: 4,
      name: 'Gezonde Foodtruck',
      image: '/images/foodtrucks/image00005.jpeg',
      description: 'Verse, gezonde gerechten met lokale en biologische ingrediënten. Ideaal voor evenementen waar je een gezond en verantwoord alternatief wilt bieden.',
      features: ['Biologische ingrediënten', 'Lokale producten', 'Salades', 'Smoothies', 'Veganistische opties'],
      price: 'Vanaf €8,00 per persoon'
    },
    {
      id: 5,
      name: 'Aziatische Foodtruck',
      image: '/images/foodtrucks/image00006.jpeg',
      description: 'Authentieke Aziatische gerechten met verse kruiden en specerijen. Van Thaise curry tot Japanse sushi en Vietnamese loempia\'s.',
      features: ['Diverse Aziatische keukens', 'Verse kruiden', 'Wokgerechten', 'Sushi', 'Vegetarische opties'],
      price: 'Vanaf €10,00 per persoon'
    },
    {
      id: 6,
      name: 'IJs Foodtruck',
      image: '/images/foodtrucks/image00007.jpeg',
      description: 'Ambachtelijk bereid ijs in diverse smaken en toppings. Perfect voor zomerevenementen of als dessert na een heerlijke maaltijd.',
      features: ['Ambachtelijk ijs', 'Diverse smaken', 'Toppings bar', 'Suikervrije opties', 'Veganistisch ijs beschikbaar'],
      price: 'Vanaf €4,50 per persoon'
    },
    {
      id: 7,
      name: 'Panini Foodtruck',
      image: '/images/foodtrucks/image00014.jpeg',
      description: 'Verse, warme panini\'s met diverse vullingen. Knapperig van buiten, smeuïg van binnen met de lekkerste kazen en vleeswaren.',
      features: ['Verse broodjes', 'Diverse vullingen', 'Vegetarische opties', 'Huisgemaakte sauzen', 'Glutenvrije opties mogelijk'],
      price: 'Vanaf €7,50 per persoon'
    },
    {
      id: 8,
      name: 'Foodtruck Bar',
      image: '/images/foodtrucks/image00015.jpeg',
      description: 'Een complete mobiele bar voor je evenement. Van speciaalbieren tot cocktails en alles daartussenin voor een geslaagd feest.',
      features: ['Speciaalbieren', 'Cocktails', 'Wijnen', 'Alcoholvrije opties', 'Professionele bartenders'],
      price: 'Vanaf €6,00 per persoon'
    }
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="bg-orange-500 py-16 mb-12">
        <div className="container mx-auto px-4 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Foodtrucks</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ontdek ons diverse aanbod aan foodtrucks voor elk evenement en elke smaak.
            Van Italiaanse pizza's tot Aziatische specialiteiten, wij hebben het allemaal!
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {foodtrucks.map((truck) => (
            <div key={truck.id} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
              <img 
                src={truck.image} 
                alt={truck.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold mb-2">{truck.name}</h2>
                <p className="text-gray-600 mb-4">{truck.description}</p>
                <h3 className="font-bold text-lg mb-2">Kenmerken:</h3>
                <ul className="mb-4 space-y-1">
                  {truck.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="font-bold text-orange-500 text-lg">{truck.price}</p>
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
        
        <div className="bg-orange-50 p-8 rounded-lg mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Combineer meerdere foodtrucks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Voor grotere evenementen is het mogelijk om meerdere foodtrucks te combineren.
              Zo creëer je een gevarieerd aanbod voor je gasten!
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="/images/foodtrucks/image00001.jpeg" 
                alt="Foodtruck combinatie" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Populaire combinaties:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Pizza + IJs (hoofdgerecht + dessert)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>BBQ + Bar (eten + drinken)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Pasta + Panini + Gezond (diverse opties)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Aziatisch + IJs (wereldsmaken)</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link 
                  to="/contact" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
                >
                  Vraag een offerte op maat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Foodtrucks
