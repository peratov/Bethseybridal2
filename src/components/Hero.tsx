import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const WHATSAPP_NUMBER = '233243673829';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello Lisa! I would like to book a consultation for wedding planning services.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Hero() {
  return (
    <div id="home" className="relative min-h-screen flex items-center bg-gray-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-light text-white mb-6 leading-tight">
            Your Dream Wedding Awaits
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 font-cormorant font-light leading-relaxed">
            Experience the perfect blend of elegance and sophistication with Ghana's premier luxury wedding planning service
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-royal-400 hover:bg-royal-500 text-white rounded-lg transition-all text-lg font-cormorant group"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-sm transition-all text-lg font-cormorant group"
            >
              View Our Work
              <Heart className="ml-2 h-5 w-5 transform group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}