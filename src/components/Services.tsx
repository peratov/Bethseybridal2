import React from 'react';
import { Crown, Sparkles, Users, Camera, Palette, Music } from 'lucide-react';

const services = [
  {
    icon: Crown,
    title: 'Full Wedding Planning',
    description: 'Comprehensive planning and coordination for your perfect day',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
  },
  {
    icon: Sparkles,
    title: 'Custom Ceremonies',
    description: 'Personalized ceremonies that honor your unique traditions',
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80'
  },
  {
    icon: Users,
    title: 'Premium Vendors',
    description: 'Carefully curated network of exceptional wedding professionals',
    image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80'
  },
  {
    icon: Camera,
    title: 'Photography & Video',
    description: 'Capturing your precious moments in stunning detail',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&q=80'
  },
  {
    icon: Palette,
    title: 'Design & Styling',
    description: 'Creating beautiful, personalized wedding aesthetics',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80'
  },
  {
    icon: Music,
    title: 'Entertainment',
    description: 'Curating unforgettable entertainment experiences',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg font-cormorant">
            Every detail thoughtfully planned for your perfect celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <service.icon className="absolute top-4 left-4 h-8 w-8 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-playfair text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 font-cormorant text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}