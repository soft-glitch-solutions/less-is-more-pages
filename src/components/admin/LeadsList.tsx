
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, Clock } from 'lucide-react';

const LeadsList = () => {
  const [leads, setLeads] = useState([
    {
      id: 1,
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+27 84 555 1234',
      service: 'Construction',
      message: 'Need help with home renovation project',
      status: 'New',
      submittedAt: '2024-01-16 10:30'
    },
    {
      id: 2,
      name: 'Lisa Brown',
      email: 'lisa@example.com',
      phone: '+27 82 444 5678',
      service: 'Plumbing',
      message: 'Urgent plumbing issue in kitchen',
      status: 'Contacted',
      submittedAt: '2024-01-15 14:20'
    }
  ]);

  const updateLeadStatus = (id: number, status: string) => {
    setLeads(leads.map(lead => 
      lead.id === id ? { ...lead, status } : lead
    ));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'New':
        return <Clock size={16} className="text-yellow-500" />;
      case 'Contacted':
        return <CheckCircle size={16} className="text-blue-500" />;
      case 'Converted':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'Rejected':
        return <XCircle size={16} className="text-red-500" />;
      default:
        return <Clock size={16} className="text-gray-500" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Leads</CardTitle>
      </CardHeader>
      <CardContent>
        {leads.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No leads found</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leads.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{lead.email}</div>
                      <div className="text-gray-500">{lead.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>{lead.service}</TableCell>
                  <TableCell className="max-w-xs truncate">{lead.message}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(lead.status)}
                      <span className="text-sm">{lead.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{lead.submittedAt}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateLeadStatus(lead.id, 'Contacted')}
                      >
                        Contact
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateLeadStatus(lead.id, 'Converted')}
                      >
                        Convert
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default LeadsList;
