import React, { useState, useEffect, useRef } from 'react';

const InteractiveSteps = () => {
  const [currentStep, setCurrentStep] = useState(5); // Empezamos con el paso 5 como en la imagen
  const [hexagonRotation, setHexagonRotation] = useState(0);
  const [isHovered, setIsHovered] = useState({ left: false, right: false });
  const sectionRef = useRef(null);
  const hexagonRef = useRef(null);
  
  // Contenido para cada paso
  const steps = [
    {
      number: 1,
      title: "STAP",
      content: "Het is zover! Geniet van heerlijk eten en een geweldige sfeer door middel van onze foodtrucks op je evenement."
    },
    {
      number: 2,
      title: "STAP",
      content: "Kies uit onze diverse foodtrucks en stel je eigen culinaire ervaring samen voor je gasten."
    },
    {
      number: 3,
      title: "STAP",
      content: "Onze professionele crew zorgt voor een vlekkeloze service en een onvergetelijke food experience."
    },
    {
      number: 4,
      title: "STAP",
      content: "Geniet zorgeloos van je evenement terwijl wij alle culinaire details verzorgen."
    },
    {
      number: 5,
      title: "STAP",
      content: "Het is zover! Geniet van heerlijk eten en een geweldige sfeer door middel van onze foodtrucks op je evenement. Je wordt ook op deze dag compleet ontzorgt, zodat je je gezellig kan focussen op de gasten."
    }
  ];
  
  // Solo detectar si la sección es visible, pero no cambiar el paso con el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Solo para detectar si la sección es visible
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Comprobar la posición inicial
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-orange-50"
    >
      {/* Forma de estrella/engranaje que ocupa toda la altura - usando el SVG proporcionado */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <svg 
          viewBox="0 0 1360 1006" 
          className="w-full h-full" 
          preserveAspectRatio="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,0 L1360,0 L1360,1006 L0,1006 Z"
            fill="#f5f0e8" // Color crema del fondo
          />
          <path 
            d="M666.33 5.80092C674.021 -1.40078 685.979 -1.40077 693.67 5.80093L781.478 88.0247C787.209 93.3906 795.548 94.9078 802.801 91.904L928.808 39.7191C939.242 35.3982 951.181 40.5665 955.171 51.1309L990.412 144.443C993.588 152.851 1001.98 158.108 1010.93 157.294L1149.06 144.733C1162.14 143.543 1172.8 155.078 1170.58 168.028L1155.89 253.762C1154.06 264.433 1161.06 274.621 1171.67 276.749L1294.95 301.463C1309.54 304.387 1315.94 321.646 1306.79 333.375L1251.73 403.937C1244.22 413.564 1247.02 427.617 1257.64 433.638L1349.31 485.601C1362.82 493.263 1362.82 512.737 1349.31 520.399L1257.64 572.362C1247.02 578.383 1244.22 592.436 1251.73 602.063L1306.79 672.625C1315.94 684.354 1309.54 701.613 1294.95 704.537L1171.67 729.251C1161.06 731.379 1154.06 741.567 1155.89 752.238L1170.58 837.972C1172.8 850.922 1162.14 862.457 1149.06 861.267L1010.93 848.706C1001.98 847.892 993.588 853.149 990.412 861.557L955.171 954.869C951.181 965.434 939.242 970.602 928.808 966.281L802.801 914.096C795.548 911.092 787.209 912.609 781.478 917.975L693.67 1000.2C685.979 1007.4 674.021 1007.4 666.33 1000.2L578.522 917.975C572.791 912.609 564.452 911.092 557.199 914.096L431.192 966.281C420.758 970.602 408.819 965.434 404.829 954.869L369.588 861.557C366.412 853.149 358.017 847.892 349.066 848.706L210.944 861.267C197.86 862.457 187.202 850.922 189.42 837.972L204.109 752.238C205.937 741.567 198.943 731.379 188.328 729.251L65.0509 704.537C50.4644 701.613 44.0625 684.354 53.2137 672.625L108.266 602.063C115.777 592.436 112.983 578.383 102.36 572.362L10.6932 520.399C-2.82292 512.737 -2.82296 493.263 10.6932 485.601L102.36 433.638C112.983 427.617 115.777 413.564 108.266 403.937L53.2137 333.375C44.0625 321.646 50.4644 304.387 65.051 301.463L188.328 276.749C198.943 274.621 205.937 264.433 204.109 253.762L189.42 168.028C187.202 155.078 197.86 143.543 210.944 144.733L349.066 157.294C358.017 158.108 366.412 152.851 369.588 144.443L404.829 51.1309C408.819 40.5665 420.758 35.3982 431.192 39.7191L557.199 91.904C564.452 94.9078 572.791 93.3906 578.522 88.0247L666.33 5.80092Z" 
            fill="#d4f69c" // Color verde lima
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          {/* Número en la parte superior derecha - Círculo dentado con número */}
          <div className="absolute top-10 right-10 flex items-center">
            <div 
              ref={hexagonRef}
              className="relative"
              style={{
                transform: `rotate(${hexagonRotation}deg)`,
                transition: 'transform 0.7s ease-in-out'
              }}
            >
              <svg width="70" height="70" viewBox="0 0 70 70">
                <path 
                  d="M35,5 C36.5,5 38,5.1 39.5,5.3 L42,12 C43.5,12.4 45,13 46.4,13.6 L53,9.5 C55.6,11 58,13 60,15.3 L56.4,22.2 C57.4,23.6 58.2,25.1 58.9,26.7 L66,28 C66.6,30.2 67,32.6 67,35 C67,36.5 66.9,38 66.7,39.5 L60,42 C59.6,43.5 59,45 58.4,46.4 L62.5,53 C61,55.6 59,58 56.7,60 L49.8,56.4 C48.4,57.4 46.9,58.2 45.3,58.9 L44,66 C41.8,66.6 39.4,67 37,67 C35.5,67 34,66.9 32.5,66.7 L30,60 C28.5,59.6 27,59 25.6,58.4 L19,62.5 C16.4,61 14,59 12,56.7 L15.6,49.8 C14.6,48.4 13.8,46.9 13.1,45.3 L6,44 C5.4,41.8 5,39.4 5,37 C5,35.5 5.1,34 5.3,32.5 L12,30 C12.4,28.5 13,27 13.6,25.6 L9.5,19 C11,16.4 13,14 15.3,12 L22.2,15.6 C23.6,14.6 25.1,13.8 26.7,13.1 L28,6 C30.2,5.4 32.6,5 35,5 Z" 
                  fill="#00a651" // Color verde para el círculo dentado
                />
                <circle cx="35" cy="35" r="25" fill="#00a651" />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
                {currentStep}
              </span>
            </div>
          </div>
          
          {/* Título y contenido central */}
          <div 
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-8xl font-bold mb-8 text-neutral-900 font-anton tracking-tighter">
              {steps[currentStep - 1].title}
            </h2>
            <p className="text-xl text-neutral-800 leading-relaxed max-w-2xl mx-auto px-4">
              {steps[currentStep - 1].content}
            </p>
          </div>
          
          {/* Navegación de puntos */}
          <div className="absolute bottom-10 flex space-x-2">
            {steps.map((step, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${currentStep === index + 1 ? 'bg-green-600' : 'bg-gray-400'}`}
                onClick={() => {
                  // Calcular la posición de scroll necesaria para este paso
                  const targetPosition = ((index + 1) / steps.length) * sectionRef.current.offsetHeight;
                  window.scrollTo({
                    top: sectionRef.current.offsetTop + targetPosition - window.innerHeight / 2,
                    behavior: 'smooth'
                  });
                }}
              />
            ))}
          </div>
          
          {/* Botones de navegación */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered.left ? 'shadow-md' : ''}`}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #000000'
              }}
              onClick={() => {
                const newStep = Math.max(1, currentStep - 1);
                // Rotar el hexágono cuando cambiamos de paso
                setHexagonRotation(prev => prev + 360);
                setCurrentStep(newStep);
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, left: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, left: false }))}
              disabled={currentStep === 1}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
            <button 
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered.right ? 'shadow-md' : ''}`}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #000000'
              }}
              onClick={() => {
                const newStep = Math.min(5, currentStep + 1);
                // Rotar el hexágono cuando cambiamos de paso
                setHexagonRotation(prev => prev + 360);
                setCurrentStep(newStep);
              }}
              onMouseEnter={() => setIsHovered(prev => ({ ...prev, right: true }))}
              onMouseLeave={() => setIsHovered(prev => ({ ...prev, right: false }))}
              disabled={currentStep === 5}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSteps;
