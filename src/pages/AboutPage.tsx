
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import About from '../components/About';
import Team from '../components/Team';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <About />
        <Team />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
