import React from 'react';
import { Phone, MapPin, MessageCircle, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '233243673829';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I would like to book a consultation for wedding planning services.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair text-gray-900 mb-4">Start Your Journey</h2>
          <p className="text-gray-600 mb-12 font-cormorant text-lg">
            Let's create something beautiful together. Contact Lisa to begin planning your perfect wedding day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-royal-500 transition-colors p-4 rounded-lg hover:bg-gray-50"
            >
              <MessageCircle className="h-6 w-6 text-royal-400 mr-4" />
              <span className="font-cormorant text-lg">WhatsApp: +233 24 367 3829</span>
            </a>
            <div className="flex items-center p-4">
              <Phone className="h-6 w-6 text-royal-400 mr-4" />
              <span className="text-gray-600 font-cormorant text-lg">+233 24 367 3829</span>
            </div>
            <a 
              href="https://www.instagram.com/bethsey_bridal/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-royal-500 transition-colors p-4 rounded-lg hover:bg-gray-50"
            >
              <Instagram className="h-6 w-6 text-royal-400 mr-4" />
              <span className="font-cormorant text-lg">@bethsey_bridal</span>
            </a>
            <div className="flex items-center p-4">
              <MapPin className="h-6 w-6 text-royal-400 mr-4" />
              <span className="text-gray-600 font-cormorant text-lg">Accra, Ghana</span>
            </div>
          </div>

          <div className="flex gap-4 justify-center mt-12">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-royal-400 text-white rounded-lg hover:bg-royal-500 transition-colors text-lg font-cormorant"
            >
              Book a Consultation
            </a>
            <a
              href="https://www.instagram.com/bethsey_bridal/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-100 text-gray-800 rounded-lg hover:bg-gray-200 transition-colors text-lg font-cormorant"
            >
              Follow Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}