
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Ready to embrace the power of less? Let's discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-gray-700 mt-1" size={24} />
              <div>
                <h3 className="font-light text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 font-light">hello@thelesscompany.com</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="text-gray-700 mt-1" size={24} />
              <div>
                <h3 className="font-light text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 font-light">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-gray-700 mt-1" size={24} />
              <div>
                <h3 className="font-light text-gray-900 mb-1">Location</h3>
                <p className="text-gray-600 font-light">New York, NY</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors duration-200 font-light"
              />
            </div>
            
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors duration-200 font-light"
              />
            </div>
            
            <div>
              <select className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors duration-200 font-light text-gray-600">
                <option>Select a Service</option>
                <option>Less Construction</option>
                <option>Less Plumbing</option>
                <option>Less Electrical</option>
                <option>Less Security</option>
                <option>Less Cleaning</option>
              </select>
            </div>
            
            <div>
              <textarea
                rows={4}
                placeholder="Tell us about your project"
                className="w-full px-4 py-3 border border-gray-200 focus:border-gray-400 focus:outline-none transition-colors duration-200 font-light resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 font-light hover:bg-gray-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
