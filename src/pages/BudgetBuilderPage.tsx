
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, Calculator, ArrowLeft } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { leadDB } from '@/lib/database';

const BudgetBuilderPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    projectDescription: '',
    toolsSupplied: 'no',
    message: ''
  });
  const [photos, setPhotos] = useState<File[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPhotos(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadMessage = `Budget Builder Request:
Budget: R${formData.budget}
Tools Supplied: ${formData.toolsSupplied}
Project Description: ${formData.projectDescription}
Photos: ${photos.length} uploaded
Additional Message: ${formData.message}`;

    leadDB.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: 'Budget Builder',
      message: leadMessage
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 py-20">
          <Card className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Request Submitted!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Thank you for your budget builder request. We'll review your project details 
                and get back to you within 24 hours to let you know if we can take it on.
              </p>
              <p className="text-sm text-gray-500">
                Remember: Final approval happens after an on-site visit.
              </p>
              <Button onClick={() => navigate('/')} className="mt-4">
                Return Home
              </Button>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="mb-8 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <Calculator className="mx-auto mb-6 text-gray-700" size={64} />
            <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
              Budget Builder
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Upload photos of your project, tell us your budget, and choose whether you'll 
              supply the tools. We'll review your request and let you know if we can take it on.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="budget">Your Budget (ZAR) *</Label>
                    <Input
                      id="budget"
                      name="budget"
                      type="number"
                      placeholder="e.g. 15000"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="projectDescription">Project Description *</Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    placeholder="Describe your project in detail..."
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="toolsSupplied">Will you supply the tools? *</Label>
                  <select
                    id="toolsSupplied"
                    name="toolsSupplied"
                    value={formData.toolsSupplied}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  >
                    <option value="no">No, please include tools in quote</option>
                    <option value="yes">Yes, I will supply the tools</option>
                    <option value="partial">Some tools only</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="photos">Upload Project Photos</Label>
                  <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                    <input
                      id="photos"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="photos"
                      className="cursor-pointer text-gray-600 hover:text-gray-800"
                    >
                      Click to upload photos or drag and drop
                    </label>
                    {photos.length > 0 && (
                      <p className="mt-2 text-sm text-gray-500">
                        {photos.length} photo(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Information</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any additional details or special requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>How it works:</strong> We'll review your budget and project details. 
                    If it looks feasible, we'll contact you to schedule an on-site visit for 
                    final approval and detailed planning.
                  </p>
                </div>

                <Button type="submit" className="w-full">
                  Submit Budget Builder Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BudgetBuilderPage;
