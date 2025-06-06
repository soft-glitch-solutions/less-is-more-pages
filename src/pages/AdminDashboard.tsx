
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Users, FileText, DollarSign, Plus } from 'lucide-react';
import CustomerList from '@/components/admin/CustomerList';
import LeadsList from '@/components/admin/LeadsList';
import QuotesList from '@/components/admin/QuotesList';
import CreateCustomer from '@/components/admin/CreateCustomer';
import CreateQuote from '@/components/admin/CreateQuote';
import CreateLead from '@/components/admin/CreateLead';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showCreateCustomer, setShowCreateCustomer] = useState(false);
  const [showCreateQuote, setShowCreateQuote] = useState(false);
  const [showCreateLead, setShowCreateLead] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-light text-gray-900">
              The Less Company <span className="text-gray-500">CRM</span>
            </h1>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">Active customers</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">0</div>
                  <p className="text-xs text-muted-foreground">Pending leads</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Quotes</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">R0</div>
                  <p className="text-xs text-muted-foreground">Quote value</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates across your CRM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-center py-8">No recent activity to display</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light">Customer Management</h2>
              <Button onClick={() => setShowCreateCustomer(true)} className="flex items-center gap-2">
                <Plus size={16} />
                Add Customer
              </Button>
            </div>
            <CustomerList key={`customers-${refreshKey}`} />
            {showCreateCustomer && (
              <CreateCustomer 
                onClose={() => setShowCreateCustomer(false)} 
                onCustomerCreated={handleRefresh}
              />
            )}
          </TabsContent>

          <TabsContent value="leads" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light">Lead Management</h2>
              <Button onClick={() => setShowCreateLead(true)} className="flex items-center gap-2">
                <Plus size={16} />
                Add Lead
              </Button>
            </div>
            <LeadsList key={`leads-${refreshKey}`} />
            {showCreateLead && (
              <CreateLead 
                onClose={() => setShowCreateLead(false)} 
                onLeadCreated={handleRefresh}
              />
            )}
          </TabsContent>

          <TabsContent value="quotes" className="mt-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-light">Quote Management</h2>
              <Button onClick={() => setShowCreateQuote(true)} className="flex items-center gap-2">
                <Plus size={16} />
                Create Quote
              </Button>
            </div>
            <QuotesList key={`quotes-${refreshKey}`} />
            {showCreateQuote && (
              <CreateQuote 
                onClose={() => setShowCreateQuote(false)} 
                onQuoteCreated={handleRefresh}
              />
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;
