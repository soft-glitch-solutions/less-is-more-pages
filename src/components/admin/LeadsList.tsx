
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle, XCircle, Clock, Edit, Save, X } from 'lucide-react';
import { leadDB } from '@/lib/database';

const LeadsList = () => {
  const [leads, setLeads] = useState<any[]>([]);
  const [editingNotes, setEditingNotes] = useState<number | null>(null);
  const [notesValue, setNotesValue] = useState('');

  const loadLeads = () => {
    const data = leadDB.getAll();
    setLeads(data);
  };

  useEffect(() => {
    loadLeads();
  }, []);

  const updateLeadStatus = (id: number, status: string) => {
    leadDB.updateStatus(id, status);
    loadLeads();
  };

  const startEditingNotes = (lead: any) => {
    setEditingNotes(lead.id);
    setNotesValue(lead.notes || '');
  };

  const saveNotes = (id: number) => {
    leadDB.updateNotes(id, notesValue);
    setEditingNotes(null);
    setNotesValue('');
    loadLeads();
  };

  const cancelEditingNotes = () => {
    setEditingNotes(null);
    setNotesValue('');
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
                <TableHead>Notes</TableHead>
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
                    {editingNotes === lead.id ? (
                      <div className="space-y-2">
                        <Textarea
                          value={notesValue}
                          onChange={(e) => setNotesValue(e.target.value)}
                          rows={2}
                          className="min-w-[200px]"
                        />
                        <div className="flex space-x-1">
                          <Button size="sm" onClick={() => saveNotes(lead.id)}>
                            <Save size={12} />
                          </Button>
                          <Button size="sm" variant="outline" onClick={cancelEditingNotes}>
                            <X size={12} />
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <span className="text-sm max-w-xs truncate">
                          {lead.notes || 'No notes'}
                        </span>
                        <Button size="sm" variant="outline" onClick={() => startEditingNotes(lead)}>
                          <Edit size={12} />
                        </Button>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(lead.status)}
                      <span className="text-sm">{lead.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{new Date(lead.submitted_at).toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateLeadStatus(lead.id, 'Contacted')}
                        disabled={lead.status === 'Contacted' || lead.status === 'Converted'}
                      >
                        Contact
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => updateLeadStatus(lead.id, 'Converted')}
                        disabled={lead.status === 'Converted'}
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
