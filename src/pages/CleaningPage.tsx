
import { ArrowLeft, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CleaningPage = () => {
  const galleryImages = [
    { id: 1, src: '/placeholder.svg', alt: 'Pristine residential cleaning' },
    { id: 2, src: '/placeholder.svg', alt: 'Commercial space maintenance' },
    { id: 3, src: '/placeholder.svg', alt: 'Eco-friendly cleaning products' },
    { id: 4, src: '/placeholder.svg', alt: 'Detail-oriented service' },
    { id: 5, src: '/placeholder.svg', alt: 'Minimalist space upkeep' },
    { id: 6, src: '/placeholder.svg', alt: 'Professional cleaning team' },
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
            <Sparkles size={64} className="text-gray-700" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Less Cleaning
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Exceptional cleaning means leaving no trace of our presence—only the 
            pristine environment you deserve. We maintain your spaces with meticulous 
            care while respecting their inherent beauty and tranquility.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Method</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Minimal Disruption</h3>
              <p className="text-gray-600 font-light">
                We work quietly and efficiently, ensuring your daily routine continues undisturbed while we maintain your space.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Eco-Conscious Products</h3>
              <p className="text-gray-600 font-light">
                Only the finest, environmentally responsible cleaning products that protect both your family and the planet.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Attention to Detail</h3>
              <p className="text-gray-600 font-light">
                Every surface, every corner receives our careful attention, ensuring a consistently immaculate environment.
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

export default CleaningPage;
