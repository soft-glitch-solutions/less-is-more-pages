
import { ArrowLeft, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ElectricalPage = () => {
  const galleryImages = [
    { id: 1, src: '/placeholder.svg', alt: 'Smart lighting installation' },
    { id: 2, src: '/placeholder.svg', alt: 'Hidden electrical systems' },
    { id: 3, src: '/placeholder.svg', alt: 'Energy-efficient solutions' },
    { id: 4, src: '/placeholder.svg', alt: 'Modern electrical panels' },
    { id: 5, src: '/placeholder.svg', alt: 'Wireless control systems' },
    { id: 6, src: '/placeholder.svg', alt: 'Sustainable electrical design' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Zap size={64} className="text-gray-700" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Less Electrical
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Electrical systems should power your life without dominating your space. 
            We create intelligent, energy-efficient solutions that provide maximum 
            functionality with minimal visual impact.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Smart Integration</h3>
              <p className="text-gray-600 font-light">
                Seamlessly integrated smart systems that respond to your needs while maintaining aesthetic harmony.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Energy Efficiency</h3>
              <p className="text-gray-600 font-light">
                LED lighting and smart controls that reduce energy consumption without compromising on ambiance.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Clean Installation</h3>
              <p className="text-gray-600 font-light">
                All wiring and components are expertly concealed, preserving the integrity of your design.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Previous Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div key={image.id} className="group overflow-hidden bg-gray-100 aspect-square">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricalPage;
