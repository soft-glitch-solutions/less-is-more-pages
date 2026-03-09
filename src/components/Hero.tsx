
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-extralight text-gray-900 leading-tight">
            the <span className="font-light italic">less</span> company
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Sometimes less is more. We specialize in minimalist solutions for construction, 
            plumbing, electrical, security, and cleaning services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link
              to="/services"
              className="px-8 py-3 bg-gray-900 text-white font-light hover:bg-gray-800 transition-colors duration-200 min-w-[160px]"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-gray-300 text-gray-900 font-light hover:border-gray-400 transition-colors duration-200 min-w-[160px]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
