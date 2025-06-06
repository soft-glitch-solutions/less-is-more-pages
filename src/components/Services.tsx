
import { Building, Wrench, Zap, Shield, Sparkles, Calculator, Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Building,
      title: 'Less Construction',
      description: 'Minimalist construction solutions that focus on essential elements, clean lines, and purposeful design.',
      link: '/construction',
    },
    {
      icon: Wrench,
      title: 'Less Plumbing',
      description: 'Streamlined plumbing systems with efficient, hidden infrastructure that prioritizes functionality.',
      link: '/plumbing',
    },
    {
      icon: Zap,
      title: 'Less Electrical',
      description: 'Clean electrical installations with minimal visual impact and maximum efficiency.',
      link: '/electrical',
    },
    {
      icon: Shield,
      title: 'Less Security',
      description: 'Discreet security solutions that protect without cluttering your space.',
      link: '/security',
    },
    {
      icon: Sparkles,
      title: 'Less Cleaning',
      description: 'Thorough cleaning services that maintain pristine spaces with minimal disruption.',
      link: '/cleaning',
    },
    {
      icon: Home,
      title: 'Less Properties',
      description: 'Monthly maintenance plans for landlords. Keep your rental properties in perfect condition with no surprise costs.',
      link: '/properties',
    },
    {
      icon: Calculator,
      title: 'Budget Builder',
      description: 'Upload photos, set your budget, and let us review if we can make your project happen.',
      link: '/budget-builder',
    },
    {
      icon: Clock,
      title: 'Emergency After-hours',
      description: 'R250 call-out fee for urgent repairs and emergency services when you need us most.',
      link: '/emergency-services',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            We believe in the power of simplicity. Each service is designed to deliver 
            maximum impact with minimal complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-lg block"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6">
                <service.icon 
                  size={48} 
                  className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200" 
                />
              </div>
              
              <h3 className="text-xl font-light text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
