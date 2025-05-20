import React from 'react'

const RecentEvents = () => {
  const events = [
    {
      id: 1,
      name: 'Adidas Bedrijfsfeest',
      image: '/images/foodtrucks/image00009.jpeg',
      description: 'Catering voor 250 personen met diverse foodtrucks tijdens het jaarlijkse bedrijfsfeest van Adidas.'
    },
    {
      id: 2,
      name: 'Marketforce Live',
      image: '/images/foodtrucks/image00010.jpeg',
      description: 'Lunch en borrel verzorgd met onze foodtrucks voor 500 bezoekers van het Marketforce Live evenement.'
    },
    {
      id: 3,
      name: 'Formule 1 Paddock Club',
      image: '/images/foodtrucks/image00011.jpeg',
      description: 'Premium catering voor de VIP gasten in de Paddock Club tijdens de Dutch Grand Prix.'
    },
    {
      id: 4,
      name: 'KNVB Jong Oranje',
      image: '/images/foodtrucks/image00012.jpeg',
      description: 'Verzorging van de catering voor spelers en staf van Jong Oranje tijdens het trainingsweekend.'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Recente Evenementen</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek waar onze foodtrucks recent te vinden waren en hoe we diverse evenementen hebben verzorgd.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row">
              <div className="md:w-2/5">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-xl font-medium mb-4">Andere recente evenementen:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Open dag Feyenoord</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Koninklijke Marine</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Amsterdam Dance Event</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Lowlands Festival</span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full">Bruiloft Van der Meer</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentEvents
