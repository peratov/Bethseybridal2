import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '233243673829';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello Lisa! I would like to discuss my wedding plans.');
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

export default function FloatingButton() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-6 py-3 bg-royal-400 text-white rounded-lg hover:bg-royal-500 transition-all shadow-lg hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="font-cormorant text-lg">Talk to Lisa</span>
    </a>
  );
}