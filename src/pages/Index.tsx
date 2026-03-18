
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building, Wrench, Zap, Shield, Sparkles, Home, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const highlights = [
  { icon: Building, title: 'Construction', link: '/construction' },
  { icon: Wrench, title: 'Plumbing', link: '/plumbing' },
  { icon: Zap, title: 'Electrical', link: '/electrical' },
  { icon: Shield, title: 'Security', link: '/security' },
  { icon: Sparkles, title: 'Cleaning', link: '/cleaning' },
  { icon: Home, title: 'Property Care', link: '/properties' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      {/* Tagline Strip */}
      <section className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-xl font-medium tracking-wide">
            Less is More — Quality Maintenance, Fewer Headaches
          </p>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
            What We Do
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
            From construction to cleaning — we keep your property running smoothly.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {highlights.map((item) => (
              <Link
                key={item.title}
                to={item.link}
                className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all"
              >
                <item.icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-sm text-foreground">{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-12 bg-destructive/10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-destructive" />
            <div>
              <h3 className="font-bold text-foreground text-lg">24/7 Emergency Services</h3>
              <p className="text-muted-foreground text-sm">R250 call-out fee — we're always on standby.</p>
            </div>
          </div>
          <Link
            to="/emergency"
            className="px-6 py-3 bg-destructive text-destructive-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Request Emergency Service
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
