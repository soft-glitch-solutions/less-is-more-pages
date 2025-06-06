import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Plus, Trash2 } from 'lucide-react';
import { quoteDB } from '@/lib/database';

interface CreateQuoteProps {
  onClose: () => void;
  onQuoteCreated: () => void;
}

interface LineItem {
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

const CreateQuote = ({ onClose, onQuoteCreated }: CreateQuoteProps) => {
  const [formData, setFormData] = useState({
    customer_name: '',
    service: '',
    amount: 0,
    line_items: [] as LineItem[],
    notes: '',
    valid_until: ''
  });

  const [newLineItem, setNewLineItem] = useState({
    description: '',
    quantity: 1,
    unitPrice: 0,
    total: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const totalAmount = formData.line_items.reduce((sum, item) => sum + item.total, 0);
    quoteDB.create({
      ...formData,
      amount: totalAmount
    });
    onQuoteCreated();
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLineItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedItem = {
      ...newLineItem,
      [name]: name === 'quantity' || name === 'unitPrice' ? parseFloat(value) || 0 : value
    };
    
    if (name === 'quantity' || name === 'unitPrice') {
      updatedItem.total = updatedItem.quantity * updatedItem.unitPrice;
    }
    
    setNewLineItem(updatedItem);
  };

  const addLineItem = () => {
    if (newLineItem.description && newLineItem.quantity > 0 && newLineItem.unitPrice > 0) {
      setFormData({
        ...formData,
        line_items: [...formData.line_items, newLineItem]
      });
      setNewLineItem({
        description: '',
        quantity: 1,
        unitPrice: 0,
        total: 0
      });
    }
  };

  const removeLineItem = (index: number) => {
    const updatedItems = formData.line_items.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      line_items: updatedItems
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Create New Quote</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={16} />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="customer_name">Customer Name *</Label>
                <Input
                  id="customer_name"
                  name="customer_name"
                  value={formData.customer_name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="service">Service *</Label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Less Construction">Less Construction</option>
                  <option value="Less Plumbing">Less Plumbing</option>
                  <option value="Less Electrical">Less Electrical</option>
                  <option value="Less Security">Less Security</option>
                  <option value="Less Cleaning">Less Cleaning</option>
                </select>
              </div>
              <div>
                <Label htmlFor="valid_until">Valid Until *</Label>
                <Input
                  id="valid_until"
                  name="valid_until"
                  type="date"
                  value={formData.valid_until}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Line Items Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Quote Items</h3>
              
              {/* Add New Line Item */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 border rounded-lg bg-gray-50">
                <Input
                  placeholder="Description"
                  name="description"
                  value={newLineItem.description}
                  onChange={handleLineItemChange}
                />
                <Input
                  type="number"
                  placeholder="Qty"
                  name="quantity"
                  value={newLineItem.quantity}
                  onChange={handleLineItemChange}
                  min="1"
                />
                <Input
                  type="number"
                  placeholder="Unit Price"
                  name="unitPrice"
                  value={newLineItem.unitPrice}
                  onChange={handleLineItemChange}
                  min="0"
                  step="0.01"
                />
                <Input
                  type="number"
                  placeholder="Total"
                  value={newLineItem.total.toFixed(2)}
                  readOnly
                  className="bg-gray-100"
                />
                <Button type="button" onClick={addLineItem} className="w-full">
                  <Plus size={16} />
                </Button>
              </div>

              {/* Existing Line Items */}
              {formData.line_items.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-2 p-4 border rounded-lg">
                  <div className="font-medium">{item.description}</div>
                  <div>{item.quantity}</div>
                  <div>R{item.unitPrice.toFixed(2)}</div>
                  <div>R{item.total.toFixed(2)}</div>
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="sm"
                    onClick={() => removeLineItem(index)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              ))}

              {formData.line_items.length > 0 && (
                <div className="text-right text-lg font-bold">
                  Total: R{formData.line_items.reduce((sum, item) => sum + item.total, 0).toFixed(2)}
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">
                Create Quote
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreateQuote;
