
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Download, Palette, Type, Image, FileText, Megaphone, BookOpen } from 'lucide-react';

const colorPalette = [
  { name: 'Primary Dark', hsl: 'hsl(222, 47%, 11%)', hex: '#0f172a', usage: 'Headlines, buttons, navigation' },
  { name: 'Accent Blue', hsl: 'hsl(210, 40%, 50%)', hex: '#5882a4', usage: 'Links, highlights, CTAs' },
  { name: 'Light Grey', hsl: 'hsl(210, 40%, 96%)', hex: '#f1f5f9', usage: 'Backgrounds, cards' },
  { name: 'White', hsl: 'hsl(0, 0%, 100%)', hex: '#ffffff', usage: 'Page backgrounds, text on dark' },
  { name: 'Alert Red', hsl: 'hsl(0, 84%, 60%)', hex: '#ef4444', usage: 'Emergency services, warnings' },
  { name: 'Muted Text', hsl: 'hsl(215, 16%, 47%)', hex: '#64748b', usage: 'Body text, descriptions' },
];

const typographyGuide = [
  { level: 'H1', size: '2.5rem / 40px', weight: 'Bold (700)', usage: 'Page titles, hero headlines' },
  { level: 'H2', size: '1.875rem / 30px', weight: 'Bold (700)', usage: 'Section headings' },
  { level: 'H3', size: '1.25rem / 20px', weight: 'Semi-bold (600)', usage: 'Card titles, sub-sections' },
  { level: 'Body', size: '1rem / 16px', weight: 'Regular (400)', usage: 'Paragraphs, descriptions' },
  { level: 'Small', size: '0.875rem / 14px', weight: 'Regular (400)', usage: 'Captions, labels, metadata' },
];

const marketingAssets = [
  { icon: FileText, title: 'Company Brochure', desc: 'Overview of all services, pricing tiers, and contact info.', type: 'PDF' },
  { icon: Megaphone, title: 'Social Media Kit', desc: 'Branded templates for Facebook, Instagram, and LinkedIn posts.', type: 'ZIP' },
  { icon: Image, title: 'Logo Pack', desc: 'Logo in PNG, SVG, and EPS formats — light and dark variants.', type: 'ZIP' },
  { icon: FileText, title: 'Property Care Flyer', desc: 'Print-ready flyer for the Less Properties maintenance plans.', type: 'PDF' },
  { icon: Megaphone, title: 'Emergency Services Poster', desc: '24/7 call-out service poster for notice boards.', type: 'PDF' },
  { icon: BookOpen, title: 'Brand Guidelines PDF', desc: 'Complete brand manual with usage rules and examples.', type: 'PDF' },
];

const BrandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Brand & Marketing</h1>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Everything you need to represent Less Group consistently — brand guidelines, color palette, typography, and downloadable marketing materials.
          </p>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Palette className="w-7 h-7 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Color Palette</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {colorPalette.map((color) => (
              <div key={color.name} className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                <div className="p-3">
                  <p className="font-semibold text-sm text-foreground">{color.name}</p>
                  <p className="text-xs text-muted-foreground font-mono">{color.hex}</p>
                  <p className="text-xs text-muted-foreground mt-1">{color.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-7 h-7 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Typography</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-xl border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Level</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Size</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Weight</th>
                  <th className="text-left p-4 text-sm font-semibold text-foreground">Usage</th>
                </tr>
              </thead>
              <tbody>
                {typographyGuide.map((row) => (
                  <tr key={row.level} className="border-b border-border last:border-0">
                    <td className="p-4 font-bold text-foreground">{row.level}</td>
                    <td className="p-4 text-sm text-muted-foreground font-mono">{row.size}</td>
                    <td className="p-4 text-sm text-muted-foreground">{row.weight}</td>
                    <td className="p-4 text-sm text-muted-foreground">{row.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Brand Voice */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">Brand Voice & Tone</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-foreground mb-2">We Are</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>✅ Professional & dependable</li>
                <li>✅ Clear & straightforward</li>
                <li>✅ Confident but approachable</li>
                <li>✅ Solution-oriented</li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-foreground mb-2">We Avoid</h3>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>❌ Overly technical jargon</li>
                <li>❌ Aggressive sales language</li>
                <li>❌ Vague promises</li>
                <li>❌ Informal slang</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Materials */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Download className="w-7 h-7 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Marketing Materials</h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-xl">
            Download ready-to-use marketing assets. All materials follow the brand guidelines above.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketingAssets.map((asset) => (
              <div
                key={asset.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <asset.icon className="w-8 h-8 text-primary flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground text-sm">{asset.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{asset.desc}</p>
                  <span className="inline-block mt-2 text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">
                    {asset.type}
                  </span>
                </div>
                <button className="flex-shrink-0 p-2 rounded-lg hover:bg-muted transition-colors" title="Download">
                  <Download className="w-4 h-4 text-primary" />
                </button>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-6">
            * Files are placeholders — upload your actual assets to replace them.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandingPage;
