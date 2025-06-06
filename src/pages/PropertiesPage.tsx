
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { leadDB } from '@/lib/database';
import { useToast } from '@/hooks/use-toast';

const PropertiesPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    properties_count: '',
    total_rental_income: '',
    preferred_plan: '',
    property_details: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const plans = [
    {
      name: 'Basic',
      fee: '3% of rent',
      features: [
        'Monthly property inspections',
        'Minor maintenance fixes',
        'Basic reporting',
        'Tenant communication'
      ]
    },
    {
      name: 'Standard',
      fee: '5% of rent',
      features: [
        'Everything in Basic',
        'Plumbing & electrical maintenance',
        '24/7 emergency call-outs',
        'Detailed monthly reports',
        'Preventive maintenance schedule'
      ]
    },
    {
      name: 'Premium',
      fee: '7-10% of rent',
      features: [
        'Everything in Standard',
        'Full maintenance coverage',
        'Emergency repairs included',
        'Property upgrades & improvements',
        'Dedicated property manager',
        'Legal compliance support'
      ]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const leadMessage = `Property Management Inquiry:
- Properties: ${formData.properties_count}
- Total Rental Income: R${formData.total_rental_income}
- Preferred Plan: ${formData.preferred_plan}
- Property Details: ${formData.property_details}
- Additional Message: ${formData.message}`;

    leadDB.create({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: 'Less Properties',
      message: leadMessage,
      notes: `Property management lead - ${formData.preferred_plan} plan interest`
    });

    setIsSubmitted(true);
    toast({
      title: "Property Management Inquiry Submitted",
      description: "We'll review your properties and contact you within 24 hours.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <Card className="max-w-md w-full text-center">
          <CardContent className="pt-6">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-gray-600" />
            </div>
            <h2 className="text-2xl font-light text-gray-900 mb-4">
              Property Inquiry Submitted
            </h2>
            <p className="text-gray-600 mb-6">
              We'll review your property portfolio and contact you within 24 hours with a customized maintenance plan.
            </p>
            <Link to="/">
              <Button className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <Home className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-4">
              Less Properties
            </h1>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Monthly maintenance plans for landlords. Keep your rental properties in perfect condition with no surprise costs.
            </p>
          </div>
        </div>
      </div>

      {/* Service Plans */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extralight text-center text-gray-900 mb-12">
            Choose Your Maintenance Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <Card key={plan.name} className="border border-gray-200 hover:border-gray-300 transition-colors">
                <CardHeader>
                  <CardTitle className="text-xl font-light text-gray-900">{plan.name}</CardTitle>
                  <p className="text-2xl font-extralight text-gray-600">{plan.fee}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-2xl font-extralight text-center text-gray-900 mb-8">
              Benefits for Landlords
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                'No surprise costs',
                'Streamlined maintenance',
                'Better tenant retention',
                'Property value preservation'
              ].map((benefit) => (
                <div key={benefit} className="text-center">
                  <Check className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-gray-600 font-light">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl font-extralight text-center">
                Get Your Property Maintenance Quote
              </CardTitle>
              <p className="text-center text-gray-600 font-light">
                Tell us about your properties and we'll create a custom maintenance plan
              </p>
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
                    <Label htmlFor="properties_count">Number of Properties *</Label>
                    <Input
                      id="properties_count"
                      name="properties_count"
                      type="number"
                      value={formData.properties_count}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="total_rental_income">Total Monthly Rental Income (R) *</Label>
                    <Input
                      id="total_rental_income"
                      name="total_rental_income"
                      type="number"
                      value={formData.total_rental_income}
                      onChange={handleChange}
                      placeholder="e.g., 25000"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="preferred_plan">Preferred Plan *</Label>
                    <select
                      id="preferred_plan"
                      name="preferred_plan"
                      value={formData.preferred_plan}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select a plan</option>
                      <option value="Basic (3% of rent)">Basic (3% of rent)</option>
                      <option value="Standard (5% of rent)">Standard (5% of rent)</option>
                      <option value="Premium (7-10% of rent)">Premium (7-10% of rent)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="property_details">Property Details</Label>
                  <Textarea
                    id="property_details"
                    name="property_details"
                    value={formData.property_details}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Property types, locations, current maintenance issues, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirements or questions?"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Get Property Maintenance Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
