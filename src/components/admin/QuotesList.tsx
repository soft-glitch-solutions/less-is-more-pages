
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Send, Trash2 } from 'lucide-react';

const QuotesList = () => {
  const [quotes, setQuotes] = useState([
    {
      id: 1,
      quoteNumber: 'Q-2024-001',
      customerName: 'John Smith',
      service: 'Construction',
      amount: 45000,
      status: 'Draft',
      createdAt: '2024-01-16',
      validUntil: '2024-02-15'
    },
    {
      id: 2,
      quoteNumber: 'Q-2024-002',
      customerName: 'Sarah Johnson',
      service: 'Electrical',
      amount: 12500,
      status: 'Sent',
      createdAt: '2024-01-15',
      validUntil: '2024-02-14'
    }
  ]);

  const updateQuoteStatus = (id: number, status: string) => {
    setQuotes(quotes.map(quote => 
      quote.id === id ? { ...quote, status } : quote
    ));
  };

  const deleteQuote = (id: number) => {
    if (window.confirm('Are you sure you want to delete this quote?')) {
      setQuotes(quotes.filter(quote => quote.id !== id));
    }
  };

  const printQuote = (quote: any) => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Quote ${quote.quoteNumber}</title>
            <style>
              body { font-family: Arial, sans-serif; padding: 20px; }
              .header { text-align: center; margin-bottom: 30px; }
              .quote-details { margin-bottom: 20px; }
              .quote-details h2 { margin-bottom: 10px; }
              .amount { font-size: 24px; font-weight: bold; color: #059669; }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>The Less Company</h1>
              <p>Professional Services Quote</p>
            </div>
            <div class="quote-details">
              <h2>Quote Details</h2>
              <p><strong>Quote Number:</strong> ${quote.quoteNumber}</p>
              <p><strong>Customer:</strong> ${quote.customerName}</p>
              <p><strong>Service:</strong> ${quote.service}</p>
              <p><strong>Created:</strong> ${quote.createdAt}</p>
              <p><strong>Valid Until:</strong> ${quote.validUntil}</p>
              <p><strong>Status:</strong> ${quote.status}</p>
              <div class="amount">
                <p>Total Amount: R${quote.amount.toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Sent':
        return 'bg-blue-100 text-blue-800';
      case 'Accepted':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Quotes</CardTitle>
      </CardHeader>
      <CardContent>
        {quotes.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No quotes found</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Quote #</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Valid Until</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {quotes.map((quote) => (
                <TableRow key={quote.id}>
                  <TableCell className="font-medium">{quote.quoteNumber}</TableCell>
                  <TableCell>{quote.customerName}</TableCell>
                  <TableCell>{quote.service}</TableCell>
                  <TableCell>R{quote.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(quote.status)}`}>
                      {quote.status}
                    </span>
                  </TableCell>
                  <TableCell>{quote.createdAt}</TableCell>
                  <TableCell>{quote.validUntil}</TableCell>
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
                        onClick={() => printQuote(quote)}
                        title="Print Quote"
                      >
                        <printer size={14} />
                      </Button>
                      {quote.status === 'Draft' && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => updateQuoteStatus(quote.id, 'Sent')}
                        >
                          <Send size={14} />
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => deleteQuote(quote.id)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete Quote"
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

export default QuotesList;
