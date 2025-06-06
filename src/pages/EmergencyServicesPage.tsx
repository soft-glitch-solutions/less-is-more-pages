
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, AlertTriangle, ArrowLeft, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { leadDB } from '@/lib/database';

const EmergencyServicesPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    emergencyType: '',
    urgencyLevel: 'high',
    description: '',
    preferredTime: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const emergencyMessage = `EMERGENCY AFTER-HOURS SERVICE REQUEST:
Emergency Type: ${formData.emergencyType}
Urgency Level: ${formData.urgencyLevel}
Address: ${formData.address}
Preferred Time: ${formData.preferredTime}
Description: ${formData.description}
Call-out Fee: R250 (acknowledged)`;

    leadDB.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: 'Emergency After-hours',
      message: emergencyMessage
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <div className="max-w-2xl mx-auto px-4 py-20">
          <Card className="text-center border-red-200">
            <CardHeader>
              <AlertTriangle className="mx-auto mb-4 text-red-600" size={48} />
              <CardTitle className="text-2xl text-gray-900">Emergency Request Submitted!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                Your emergency service request has been received. We'll contact you as soon as possible 
                to confirm the appointment and arrival time.
              </p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-medium">
                  R250 call-out fee applies for all emergency after-hours services
                </p>
              </div>
              <p className="text-sm text-gray-500">
                For immediate urgent emergencies, please call us directly.
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
            <Clock className="mx-auto mb-6 text-gray-700" size={64} />
            <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
              Emergency After-hours Services
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Urgent repairs and emergency services when you need us most. 
              R250 call-out fee applies for all after-hours emergency services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-red-200">
              <CardHeader className="text-center">
                <AlertTriangle className="mx-auto mb-2 text-red-600" size={32} />
                <CardTitle className="text-lg">Emergency Call-out</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-2xl font-bold text-red-600 mb-2">R250</p>
                <p className="text-sm text-gray-600">Call-out fee for emergency services</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="mx-auto mb-2 text-gray-700" size={32} />
                <CardTitle className="text-lg">After Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Evenings, weekends, and public holidays</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="mx-auto mb-2 text-gray-700" size={32} />
                <CardTitle className="text-lg">Quick Response</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Fast response for urgent situations</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Service Request</CardTitle>
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
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="urgencyLevel">Urgency Level *</Label>
                    <select
                      id="urgencyLevel"
                      name="urgencyLevel"
                      value={formData.urgencyLevel}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                      required
                    >
                      <option value="critical">Critical - Immediate</option>
                      <option value="high">High - Within 2 hours</option>
                      <option value="medium">Medium - Within 4 hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Service Address *</Label>
                  <Textarea
                    id="address"
                    name="address"
                    placeholder="Full address where service is needed"
                    value={formData.address}
                    onChange={handleChange}
                    rows={2}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="emergencyType">Type of Emergency *</Label>
                  <select
                    id="emergencyType"
                    name="emergencyType"
                    value={formData.emergencyType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                    required
                  >
                    <option value="">Select emergency type</option>
                    <option value="plumbing">Plumbing Emergency (burst pipes, leaks)</option>
                    <option value="electrical">Electrical Emergency (power issues, safety)</option>
                    <option value="security">Security Emergency (locks, access)</option>
                    <option value="structural">Structural Emergency (damage, safety)</option>
                    <option value="other">Other Emergency</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="preferredTime">Preferred Service Time</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    placeholder="e.g. ASAP, Tonight after 6pm, etc."
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="description">Emergency Description *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Describe the emergency situation in detail..."
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-sm text-red-800">
                    <strong>Important:</strong> A R250 call-out fee applies to all emergency after-hours services. 
                    This fee covers our response time and initial assessment. Additional work will be quoted separately.
                  </p>
                </div>

                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                  Submit Emergency Service Request
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

export default EmergencyServicesPage;
