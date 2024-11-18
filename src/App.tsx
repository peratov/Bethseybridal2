import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Reels from './components/Reels';
import Contact from './components/Contact';
import FloatingButton from './components/FloatingButton';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <Reels />
      <Contact />
      <FloatingButton />
      
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">© {new Date().getFullYear()} BerthSey Bridal. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with ♥ by{' '}
            <a 
              href="https://buildspoon.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-royal-400 hover:text-royal-300 transition-colors"
            >
              buildspoon.com
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;