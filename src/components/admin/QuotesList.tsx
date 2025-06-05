
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, Edit, Send, Trash2, Printer } from 'lucide-react';

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
              body { 
                font-family: 'Arial', sans-serif; 
                margin: 0; 
                padding: 20px; 
                line-height: 1.6;
                color: #333;
              }
              .header { 
                display: flex; 
                justify-content: space-between; 
                align-items: flex-start; 
                margin-bottom: 30px; 
                border-bottom: 3px solid #059669;
                padding-bottom: 20px;
              }
              .company-info h1 { 
                margin: 0; 
                font-size: 28px; 
                color: #059669; 
                font-weight: bold;
              }
              .company-info p { 
                margin: 5px 0; 
                font-size: 14px; 
                color: #666;
              }
              .quote-title {
                text-align: right;
                font-size: 24px;
                font-weight: bold;
                color: #333;
                margin: 0;
              }
              .quote-number {
                text-align: right;
                font-size: 16px;
                color: #666;
                margin: 5px 0;
              }
              .details-section {
                display: flex;
                justify-content: space-between;
                margin: 30px 0;
              }
              .customer-details, .quote-details {
                width: 48%;
              }
              .customer-details h3, .quote-details h3 {
                background: #f8f9fa;
                padding: 10px;
                margin: 0 0 15px 0;
                border-left: 4px solid #059669;
                font-size: 16px;
                font-weight: bold;
              }
              .detail-row {
                display: flex;
                margin: 8px 0;
              }
              .detail-label {
                font-weight: bold;
                width: 120px;
                color: #555;
              }
              .services-table {
                width: 100%;
                border-collapse: collapse;
                margin: 30px 0;
              }
              .services-table th, .services-table td {
                border: 1px solid #ddd;
                padding: 12px;
                text-align: left;
              }
              .services-table th {
                background: #059669;
                color: white;
                font-weight: bold;
              }
              .services-table tr:nth-child(even) {
                background: #f9f9f9;
              }
              .total-section {
                text-align: right;
                margin: 20px 0;
                font-size: 18px;
              }
              .total-amount {
                background: #059669;
                color: white;
                padding: 15px;
                font-size: 24px;
                font-weight: bold;
                display: inline-block;
                margin-top: 10px;
              }
              .terms {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 2px solid #eee;
                font-size: 12px;
                color: #666;
              }
              .terms h4 {
                color: #333;
                margin-bottom: 15px;
                font-size: 14px;
              }
              .terms ul {
                margin: 10px 0;
                padding-left: 20px;
              }
              .terms li {
                margin: 5px 0;
              }
              .footer {
                margin-top: 30px;
                text-align: center;
                font-size: 12px;
                color: #888;
                border-top: 1px solid #eee;
                padding-top: 15px;
              }
              @media print {
                body { margin: 0; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div class="company-info">
                <h1>THE LESS COMPANY</h1>
                <p><strong>Professional Construction & Services</strong></p>
                <p>📧 hello@thelesscompany.co.za</p>
                <p>📞 +27 21 123 4567</p>
                <p>📍 123 Cape Town Street, Cape Town, 8001, South Africa</p>
                <p><strong>VAT No:</strong> 4123456789</p>
                <p><strong>Company Reg:</strong> 2024/123456/07</p>
              </div>
              <div>
                <h2 class="quote-title">QUOTATION</h2>
                <p class="quote-number">Quote No: ${quote.quoteNumber}</p>
                <p class="quote-number">Date: ${new Date().toLocaleDateString('en-ZA')}</p>
              </div>
            </div>

            <div class="details-section">
              <div class="customer-details">
                <h3>CUSTOMER DETAILS</h3>
                <div class="detail-row">
                  <span class="detail-label">Name:</span>
                  <span>${quote.customerName}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Service:</span>
                  <span>${quote.service}</span>
                </div>
              </div>
              
              <div class="quote-details">
                <h3>QUOTE DETAILS</h3>
                <div class="detail-row">
                  <span class="detail-label">Valid Until:</span>
                  <span>${new Date(quote.validUntil).toLocaleDateString('en-ZA')}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Status:</span>
                  <span>${quote.status}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Created:</span>
                  <span>${new Date(quote.createdAt).toLocaleDateString('en-ZA')}</span>
                </div>
              </div>
            </div>

            <table class="services-table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Service Type</th>
                  <th style="text-align: right;">Amount (ZAR)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>${quote.service} Services</td>
                  <td>${quote.service}</td>
                  <td style="text-align: right;">R ${quote.amount.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>

            <div class="total-section">
              <p><strong>Subtotal: R ${quote.amount.toLocaleString()}</strong></p>
              <p><strong>VAT (15%): R ${(quote.amount * 0.15).toLocaleString()}</strong></p>
              <div class="total-amount">
                TOTAL: R ${(quote.amount * 1.15).toLocaleString()}
              </div>
            </div>

            <div class="terms">
              <h4>TERMS AND CONDITIONS</h4>
              <ul>
                <li><strong>Payment Terms:</strong> 50% deposit required upon acceptance, balance due on completion.</li>
                <li><strong>Validity:</strong> This quotation is valid for 30 days from the date issued.</li>
                <li><strong>Scope of Work:</strong> Work will be performed according to agreed specifications and South African building standards.</li>
                <li><strong>Materials:</strong> All materials supplied will be of good quality and comply with SABS standards.</li>
                <li><strong>Variations:</strong> Any variations to the original scope will be charged additionally and require written approval.</li>
                <li><strong>Warranty:</strong> We provide a 12-month warranty on workmanship from completion date.</li>
                <li><strong>Insurance:</strong> The Less Company is fully insured with public liability cover of R2,000,000.</li>
                <li><strong>Cancellation:</strong> 48 hours notice required for cancellation. Deposit may be forfeited for cancellations after work commencement.</li>
                <li><strong>Disputes:</strong> Any disputes will be resolved through South African law and jurisdiction of Cape Town courts.</li>
                <li><strong>Health & Safety:</strong> All work will comply with the Occupational Health and Safety Act 85 of 1993.</li>
              </ul>
              
              <p style="margin-top: 20px;"><strong>Banking Details:</strong></p>
              <p>Bank: Standard Bank | Account: The Less Company | Account No: 123456789 | Branch Code: 051001</p>
              
              <p style="margin-top: 15px;"><strong>Authorization:</strong></p>
              <p>This quotation has been prepared by an authorized representative of The Less Company.</p>
            </div>

            <div class="footer">
              <p>The Less Company (Pty) Ltd | Reg No: 2024/123456/07 | VAT No: 4123456789</p>
              <p>Minimalist construction solutions for modern living</p>
              <p style="margin-top: 10px; font-style: italic;">Thank you for choosing The Less Company</p>
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
                        <Printer size={14} />
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
