
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 font-light">
              Last updated: December 2024
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="space-y-8 text-gray-700 font-light leading-relaxed">
              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using The Less Company's services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">2. Our Services</h2>
                <p>
                  The Less Company provides minimalist construction, plumbing, electrical, security, and cleaning services in Cape Town, South Africa. We focus on purposeful simplicity and quality craftsmanship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">3. Service Agreement</h2>
                <p>
                  All services are provided subject to a separate service agreement that will outline specific terms, timelines, and pricing for your project.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">4. Limitation of Liability</h2>
                <p>
                  The Less Company shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light text-gray-900 mb-4">5. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us through our website or visit our office in Cape Town.
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

export default TermsPage;
