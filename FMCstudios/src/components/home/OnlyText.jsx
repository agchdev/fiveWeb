import React from 'react'

const OnlyText = () => {
  return (
    <div className='w-[90%] mx-auto py-10 flex flex-col md:flex-row gap-10 transition-all duration-400 ease-super'>
      <div className='font-bold flex flex-row gap-5 lg:gap-0 lg:flex-col items-start justify-center  font-anton semiBig-title lg:w-[40%] xl:w-[50%] text-neutral-900 transition-all duration-400 ease-super'>
        <p>FIVE</p>
        <p>UNIVERSE</p>
      </div>
      <div className='flex justify-start items-start flex-col gap-10 font-playfair w-full lg:w-[60%] xl:w-[50%] normal-text transition-all duration-400 ease-super'>
        <p>Na zes jaar lang de allergrootste publieksevenementen van het land te hebben voorzien van foodtrucks besloten wij deze flinke dosis ervaring te verwerken in hét ultieme catering concept, De Foodtruck Club. Met De Foodtruck Club bundelen wij acht hoogstaande foodtruck concepten onder één dak.</p>
        <p>Onze klanten ontvangen hierdoor altijd één vast contactpersoon, of je nu één foodtruck of een compleet foodcourt van 12 foodtrucks wilt huren. Zo houden wij de lijntjes kort en wordt het organiseren van jouw evenement een stuk eenvoudiger. Omdat je bij ons direct bij de bron bent is het bij ons vaak ook nog eens voordeliger om foodtrucks te huren.</p>
      </div>
    </div>
  )
}

export default OnlyText
