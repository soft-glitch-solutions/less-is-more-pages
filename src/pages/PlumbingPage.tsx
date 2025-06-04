
import { ArrowLeft, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const PlumbingPage = () => {
  const galleryImages = [
    { id: 1, src: '/placeholder.svg', alt: 'Hidden plumbing installation' },
    { id: 2, src: '/placeholder.svg', alt: 'Modern bathroom fixtures' },
    { id: 3, src: '/placeholder.svg', alt: 'Efficient water systems' },
    { id: 4, src: '/placeholder.svg', alt: 'Minimalist kitchen plumbing' },
    { id: 5, src: '/placeholder.svg', alt: 'Smart water solutions' },
    { id: 6, src: '/placeholder.svg', alt: 'Sustainable plumbing design' },
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
            <Wrench size={64} className="text-gray-700" />
          </div>
          <h1 className="text-5xl md:text-6xl font-extralight text-gray-900 mb-6">
            Less Plumbing
          </h1>
          <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Great plumbing should be invisible—efficient, reliable, and seamlessly integrated. 
            We design systems that work flawlessly behind the scenes, providing comfort 
            without compromising your space's aesthetic.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-light text-gray-900 mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Hidden Infrastructure</h3>
              <p className="text-gray-600 font-light">
                All pipes and systems are carefully concealed, maintaining clean lines and uncluttered spaces.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Water Efficiency</h3>
              <p className="text-gray-600 font-light">
                Smart fixtures and systems that conserve water without sacrificing performance or comfort.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-light text-gray-900 mb-4">Preventive Design</h3>
              <p className="text-gray-600 font-light">
                Thoughtful planning prevents future issues, ensuring long-term reliability and minimal maintenance.
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

export default PlumbingPage;
