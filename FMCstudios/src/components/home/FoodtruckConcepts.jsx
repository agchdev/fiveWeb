import React from 'react'
import { Link } from 'react-router-dom'

const FoodtruckConcepts = () => {
  const foodtrucks = [
    {
      id: 1,
      name: 'Pizza Foodtruck',
      image: '/images/foodtrucks/image00002.jpeg',
      description: 'Authentieke Italiaanse pizza\'s bereid in een houtgestookte oven.',
      link: '/foodtrucks/pizza-foodtruck'
    },
    {
      id: 2,
      name: 'BBQ Foodtruck',
      image: '/images/foodtrucks/image00003.jpeg',
      description: 'Sappige burgers en gegrilde specialiteiten van de Amerikaanse BBQ.',
      link: '/foodtrucks/bbq-foodtruck'
    },
    {
      id: 3,
      name: 'Pasta Foodtruck',
      image: '/images/foodtrucks/image00004.jpeg',
      description: 'Verse pasta\'s met huisgemaakte sauzen en Italiaanse kruiden.',
      link: '/foodtrucks/pasta-foodtruck'
    },
    {
      id: 4,
      name: 'Gezonde Foodtruck',
      image: '/images/foodtrucks/image00005.jpeg',
      description: 'Verse, gezonde gerechten met lokale en biologische ingrediënten.',
      link: '/foodtrucks/gezonde-foodtruck'
    },
    {
      id: 5,
      name: 'Aziatische Foodtruck',
      image: '/images/foodtrucks/image00006.jpeg',
      description: 'Authentieke Aziatische gerechten met verse kruiden en specerijen.',
      link: '/foodtrucks/aziatische-foodtruck'
    },
    {
      id: 6,
      name: 'IJs Foodtruck',
      image: '/images/foodtrucks/image00007.jpeg',
      description: 'Ambachtelijk bereid ijs in diverse smaken en toppings.',
      link: '/foodtrucks/ijs-foodtruck'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Onze Foodtruck Concepten</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze diverse foodtrucks, elk met een uniek concept en smaakvolle gerechten voor jouw evenement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {foodtrucks.map((truck) => (
            <div key={truck.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <img 
                src={truck.image} 
                alt={truck.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{truck.name}</h3>
                <p className="text-gray-600 mb-4">{truck.description}</p>
                <Link 
                  to={truck.link} 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-full transition-colors"
                >
                  Meer informatie
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/foodtrucks" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Bekijk alle foodtrucks
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FoodtruckConcepts
