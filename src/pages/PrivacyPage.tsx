
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 font-light leading-relaxed">
              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you request our services, contact us, or sign up for our newsletter.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you about our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">4. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">5. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us through our website or visit our office in Cape Town, South Africa.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPage;
