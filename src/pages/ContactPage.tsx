
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
