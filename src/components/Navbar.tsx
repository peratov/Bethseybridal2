import React from 'react';
import { Menu, X } from 'lucide-react';

const WHATSAPP_NUMBER = '233243673829';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to book a consultation for wedding planning services.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-playfair font-light text-gray-900">BerthSey Bridal</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-royal-500 transition-colors font-cormorant text-lg">Home</a>
            <a href="#services" className="text-gray-600 hover:text-royal-500 transition-colors font-cormorant text-lg">Services</a>
            <a href="#reels" className="text-gray-600 hover:text-royal-500 transition-colors font-cormorant text-lg">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-royal-500 transition-colors font-cormorant text-lg">Contact</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-lg bg-royal-400 text-white hover:bg-royal-500 transition-colors font-cormorant text-lg"
            >
              Book Now
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-royal-500 font-cormorant text-lg">Home</a>
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-royal-500 font-cormorant text-lg">Services</a>
            <a href="#reels" className="block px-3 py-2 text-gray-600 hover:text-royal-500 font-cormorant text-lg">Gallery</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-royal-500 font-cormorant text-lg">Contact</a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-royal-400 hover:text-royal-500 font-cormorant text-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}