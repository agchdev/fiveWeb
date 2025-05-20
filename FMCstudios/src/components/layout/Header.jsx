import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const header = React.createRef();

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        header.current.classList.add('bg-white');
        header.current.classList.add('shadow-md');
      } else {
        header.current.classList.remove('bg-white');
        header.current.classList.remove('shadow-md');
      }
    });
  }, []);

  return (
    <header ref={header} className="fixed w-full top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-500">
          De Foodtruck Club
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/foodtrucks" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            Onze Foodtrucks
          </Link>
          <Link to="/diensten" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            Onze Diensten
          </Link>
          <Link to="/over-ons" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
            Over Ons
          </Link>
          <Link to="/contact" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
            Contact
          </Link>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white w-full py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/foodtrucks" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Onze Foodtrucks
            </Link>
            <Link 
              to="/diensten" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Onze Diensten
            </Link>
            <Link 
              to="/over-ons" 
              className="text-gray-700 hover:text-orange-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Over Ons
            </Link>
            <Link 
              to="/contact" 
              className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
