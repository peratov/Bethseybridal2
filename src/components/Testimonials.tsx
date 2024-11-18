import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah & David",
    role: "Newlyweds",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80",
    quote: "Lisa and her team turned our dream wedding into reality. Every detail was perfect, from the flowers to the reception. They truly understand luxury and excellence.",
    type: "couple"
  },
  {
    name: "Global Bank Ghana",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    quote: "BerthSey Bridal handled our annual gala with exceptional professionalism. Their attention to detail and ability to manage large-scale events is outstanding.",
    type: "corporate"
  },
  {
    name: "Emma Thompson",
    role: "Wedding Consultant",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    quote: "Working with BerthSey Bridal has been a masterclass in luxury event planning. Their innovative approach and dedication to excellence sets them apart.",
    type: "consultant"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair text-gray-900 mb-4">Client Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-cormorant">
            Hear from our cherished clients about their experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-8 relative">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                ))}
              </div>
              <blockquote className="mb-6">
                <p className="text-gray-600 font-cormorant text-lg italic">"{testimonial.quote}"</p>
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-playfair text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 font-cormorant">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}