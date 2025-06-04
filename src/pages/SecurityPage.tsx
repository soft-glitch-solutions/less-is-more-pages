
import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SecurityPage = () => {
  const galleryImages = [
    { id: 1, src: '/placeholder.svg', alt: 'Discreet security cameras' },
    { id: 2, src: '/placeholder.svg', alt: 'Smart access control' },
    { id: 3, src: '/placeholder.svg', alt: 'Integrated alarm systems' },
    { id: 4, src: '/placeholder.svg', alt: 'Hidden security sensors' },
    { id: 5, src: '/placeholder.svg', alt: 'Modern security panels' },
    { id: 6, src: '/placeholder.svg', alt: 'Wireless security solutions' },
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
            <Shield size={64} className="text-gray-700" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Less Security
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            True security protects without intruding. Our systems provide comprehensive 
            protection while remaining virtually invisible, giving you peace of mind 
            without compromising your space's tranquility.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Discreet Monitoring</h3>
              <p className="text-gray-600 font-light">
                Advanced cameras and sensors that blend seamlessly into your environment while providing complete coverage.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Smart Access</h3>
              <p className="text-gray-600 font-light">
                Intelligent entry systems that provide secure, convenient access without bulky hardware or visual clutter.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Integrated Protection</h3>
              <p className="text-gray-600 font-light">
                Comprehensive security ecosystems that work together seamlessly, protecting your property and privacy.
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

export default SecurityPage;
