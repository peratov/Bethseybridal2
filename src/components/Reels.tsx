import React, { useEffect } from 'react';

export default function Reels() {
  const reels = [
    {
      id: "CtApb85I_Vl",
      title: "Wedding Highlights"
    },
    {
      id: "Cs6YB5jAFUa",
      title: "Bridal Moments"
    },
    {
      id: "C0uv6dWiiCk",
      title: "Wedding Ceremony"
    }
  ];

  useEffect(() => {
    // Reload Instagram embed script when component mounts
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section id="reels" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-playfair text-gray-900 mb-4">Recent Celebrations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-cormorant text-lg">
            Beautiful moments from our latest weddings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reels.map((reel) => (
            <div key={reel.id} className="instagram-media-wrapper aspect-[9/16] w-full">
              <blockquote 
                className="instagram-media" 
                data-instgrm-captioned 
                data-instgrm-permalink={`https://www.instagram.com/reel/${reel.id}/`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)'
                }}
              >
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/bethsey_bridal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-royal-400 text-white rounded-lg hover:bg-royal-500 transition-colors font-cormorant text-lg"
          >
            See More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}