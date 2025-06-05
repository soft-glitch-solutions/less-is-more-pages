
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-extralight mb-4">The Less Company</h3>
            <p className="text-gray-300 font-light leading-relaxed mb-4">
              Simplifying life through minimalist design and purposeful solutions. 
              Less complexity, more impact.
            </p>
            <p className="text-gray-300 font-light">
              Based in Cape Town, South Africa
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-light mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300 font-light">
              <li>
                <Link to="/construction" className="hover:text-white transition-colors">
                  Less Construction
                </Link>
              </li>
              <li>
                <Link to="/plumbing" className="hover:text-white transition-colors">
                  Less Plumbing
                </Link>
              </li>
              <li>
                <Link to="/electrical" className="hover:text-white transition-colors">
                  Less Electrical
                </Link>
              </li>
              <li>
                <Link to="/security" className="hover:text-white transition-colors">
                  Less Security
                </Link>
              </li>
              <li>
                <Link to="/cleaning" className="hover:text-white transition-colors">
                  Less Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="text-lg font-light mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-300 font-light mb-6">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white transition-colors">
                  Admin Portal
                </Link>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-light mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 font-light space-y-2">
            <p>© 2024 The Less Company. All rights reserved.</p>
            <p className="text-sm">Website developed by Soft Glitch Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
