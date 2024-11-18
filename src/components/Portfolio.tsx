import React from 'react';

const portfolioImages = [
  {
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a',
    category: 'Royal Weddings',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd',
    category: 'Traditional Ceremonies',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1609183590563-7c63953646e9',
    category: 'Modern Celebrations',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1621801306185-8c0ccf9c8eb8',
    category: 'Luxury Events',
    size: 'large'
  },
  {
    url: 'https://images.unsplash.com/photo-1597861405049-0b011918330e',
    category: 'Destination Weddings',
    size: 'small'
  },
  {
    url: 'https://images.unsplash.com/photo-1583939411023-14783179e581',
    category: 'Grand Receptions',
    size: 'wide'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-serif gold-text mb-6">Masterpiece Celebrations</h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Each wedding is a unique story of love, tradition, and luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[300px]">
          {portfolioImages.map((image, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl transition-transform duration-500 hover:-translate-y-2 ${
                image.size === 'large' ? 'md:col-span-3 md:row-span-2' :
                image.size === 'wide' ? 'md:col-span-6 md:row-span-1' :
                'md:col-span-2 md:row-span-1'
              }`}
            >
              <img
                src={image.url}
                alt={`BerthSey Bridal - ${image.category}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-amber-300 text-xl font-serif mb-2">{image.category}</p>
                  <a 
                    href="https://www.instagram.com/bethsey_bridal/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-sm mt-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:text-amber-300 inline-block"
                  >
                    View Collection →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}