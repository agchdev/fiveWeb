import React, { useEffect, useRef, useState } from 'react'

const ScrollingGallery = () => {
  const logosRef = useRef(null);
  const imagesRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down'); // 'up' or 'down'
  const logosPositionRef = useRef(0);
  const imagesPositionRef = useRef(0);
  const animationRef = useRef(null);
  const [logosWidth, setLogosWidth] = useState(0);
  const [imagesWidth, setImagesWidth] = useState(0);
  
  // Function to determine scroll direction
  const determineScrollDirection = () => {
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      setScrollDirection('down');
    } else if (st < lastScrollTop) {
      setScrollDirection('up');
    }
    setLastScrollTop(st);
  };
  
  // Calculate widths on mount and window resize
  useEffect(() => {
    const calculateWidths = () => {
      if (logosRef.current) {
        // Get width of a single set of logos (half of the total width since we duplicate)
        const logoItems = logosRef.current.children;
        if (logoItems.length > 0) {
          setLogosWidth(logoItems[0].offsetWidth);
        }
      }
      
      if (imagesRef.current) {
        // Get width of a single set of images (half of the total width since we duplicate)
        const imageItems = imagesRef.current.children;
        if (imageItems.length > 0) {
          setImagesWidth(imageItems[0].offsetWidth);
        }
      }
    };
    
    calculateWidths();
    window.addEventListener('resize', calculateWidths);
    
    return () => {
      window.removeEventListener('resize', calculateWidths);
    };
  }, []);
  
  // Effect for automatic movement
  useEffect(() => {
    const animate = () => {
      // Automatic movement speed
      const autoSpeed = 1.5;
      
      if (logosRef.current && imagesRef.current) {
        // Get container elements
        const logoContainer = logosRef.current;
        const imageContainer = imagesRef.current;
        
        // Get widths of logo and image sets
        const logoSetWidth = logoContainer.querySelector('div').offsetWidth;
        const imageSetWidth = imageContainer.querySelector('div').offsetWidth;
        
        // Move based on scroll direction
        if (scrollDirection === 'down') {
          // When scrolling down: logos left, images right
          logosPositionRef.current -= autoSpeed;
          imagesPositionRef.current += autoSpeed;
        } else {
          // When scrolling up: logos right, images left
          logosPositionRef.current += autoSpeed;
          imagesPositionRef.current -= autoSpeed;
        }
        
        // Create infinite loop effect for logos
        if (logosPositionRef.current <= -logoSetWidth) {
          // If scrolled past the first set going left, jump back to start position
          logosPositionRef.current += logoSetWidth;
        } else if (logosPositionRef.current >= logoSetWidth) {
          // If scrolled past the first set going right, jump back to start position
          logosPositionRef.current -= logoSetWidth;
        }
        
        // Create infinite loop effect for images
        if (imagesPositionRef.current <= -imageSetWidth) {
          // If scrolled past the first set going left, jump back to start position
          imagesPositionRef.current += imageSetWidth;
        } else if (imagesPositionRef.current >= imageSetWidth) {
          // If scrolled past the first set going right, jump back to start position
          imagesPositionRef.current -= imageSetWidth;
        }
        
        // Apply transforms
        logoContainer.style.transform = `translateX(${logosPositionRef.current}px)`;
        imageContainer.style.transform = `translateX(${imagesPositionRef.current}px)`;
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start animation if section is visible
    if (isVisible) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, scrollDirection]);
  
  // Effect for scroll event handling
  useEffect(() => {
    const handleScroll = () => {
      // Determine scroll direction
      determineScrollDirection();
      
      // Check if section is visible
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  
  return (
    <section 
      ref={sectionRef}
      className={`py-16 overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-orange-50`} 
      
    >
      {/* <div className="container mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center mb-2">FIVE GALLERY</h2>
        <p className="text-xl text-gray-600 text-center">Some Great works from Five</p>
      </div> */}
      
      {/* Logos scrolling right */}
      <div className="relative overflow-hidden mb-12">
        <div 
          ref={logosRef} 
          className="flex space-x-16 py-8"
          style={{ width: 'max-content' }}
        >
          {/* First set of logos */}
          <div className="flex space-x-16">
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00001.jpeg" alt="Roger Putero" className="h-16 object-contain" />
            </div>
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00002.jpeg" alt="Roger Putero" className="h-10 object-contain" />
            </div>
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00003.jpeg" alt="Roger Putero" className="h-12 object-contain" />
            </div>
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00004.jpeg" alt="Roger Putero" className="h-14 object-contain" />
            </div>
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00005.jpeg" alt="Roger Putero" className="h-10 object-contain" />
            </div>
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00006.jpeg" alt="Roger Putero" className="h-12 object-contain" />
            </div>
            <div className="w-32 flex items-center justify-center">
              <img src="/images/foodtrucks/image00007.jpeg" alt="Roger Putero" className="h-14 object-contain" />
            </div>
          </div>
      
        </div>
      </div>
      
      {/* Images scrolling left */}
      <div className="relative overflow-hidden mt-8">
        <div 
          ref={imagesRef} 
          className="flex space-x-6"
          style={{ width: 'max-content' }}
        >
          {/* First set of images */}
          <div className="flex space-x-10">
            <div className="w-80 my-auto h-[80%] rounded-4xl overflow-hidden shadow-lg">
              <img src="src/images/foodtrucks/image00003.jpeg" alt="Food Truck Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-80 h-auto rounded-4xl overflow-hidden shadow-lg">
              <img src="src/images/foodtrucks/image00008.jpeg" alt="Food Truck Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-80 my-auto h-[80%] rounded-4xl overflow-hidden shadow-lg">
              <img src="src/images/foodtrucks/image00014.jpeg" alt="Food Truck Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-80 h-auto rounded-4xl overflow-hidden shadow-lg">
              <img src="src/images/foodtrucks/image00012.jpeg" alt="Food Truck Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-80 my-auto h-[80%] rounded-4xl overflow-hidden shadow-lg">
              <img src="src/images/foodtrucks/image00010.jpeg" alt="Food Truck Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="w-80 h-auto rounded-4xl overflow-hidden shadow-lg">
              <img src="src/images/foodtrucks/image00013.jpeg" alt="Food Truck Event" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ScrollingGallery
