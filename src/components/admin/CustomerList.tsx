
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash2, Eye } from 'lucide-react';
import { customerDB } from '@/lib/database';

const CustomerList = () => {
  const [customers, setCustomers] = useState<any[]>([]);

  const loadCustomers = () => {
    const data = customerDB.getAll();
    setCustomers(data);
  };

  useEffect(() => {
    loadCustomers();
  }, []);

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      customerDB.delete(id);
      loadCustomers();
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Customers</CardTitle>
      </CardHeader>
      <CardContent>
        {customers.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No customers found</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((customer) => (
                <TableRow key={customer.id}>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer.phone}</TableCell>
                  <TableCell>{customer.company}</TableCell>
                  <TableCell>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {customer.status}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(customer.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye size={14} />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit size={14} />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleDelete(customer.id)}
                      >
                        <Trash2 size={14} />
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

export default CustomerList;
