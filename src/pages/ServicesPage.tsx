
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage;
