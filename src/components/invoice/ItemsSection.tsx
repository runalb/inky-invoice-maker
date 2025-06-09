
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, Trash2 } from 'lucide-react';
import { InvoiceItem } from '@/types/invoice';

interface ItemsSectionProps {
  items: InvoiceItem[];
  setItems: (items: InvoiceItem[]) => void;
}

const ItemsSection: React.FC<ItemsSectionProps> = ({ items, setItems }) => {
  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      srNo: items.length + 1,
      description: '',
      hsnCode: '',
      gstRate: 5,
      quantity: 0,
      rate: 0,
      unit: 'Nos',
      amount: 0
    };
    setItems([...items, newItem]);
  };

  const removeItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const updated = { ...item, [field]: value };
        if (field === 'quantity' || field === 'rate') {
          updated.amount = updated.quantity * updated.rate;
        }
        return updated;
      }
      return item;
    }));
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Items</CardTitle>
        <Button type="button" onClick={addItem} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Item
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={item.id} className="grid grid-cols-12 gap-4 p-4 border rounded-lg">
              <div className="col-span-4">
                <Label>Description</Label>
                <Input
                  value={item.description}
                  onChange={(e) => updateItem(item.id, 'description', e.target.value)}
                  placeholder="Item description"
                />
              </div>
              <div className="col-span-2">
                <Label>HSN/SAC</Label>
                <Input
                  value={item.hsnCode}
                  onChange={(e) => updateItem(item.id, 'hsnCode', e.target.value)}
                  placeholder="HSN Code"
                />
              </div>
              <div className="col-span-1">
                <Label>Quantity</Label>
                <Input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateItem(item.id, 'quantity', parseFloat(e.target.value) || 0)}
                />
              </div>
              <div className="col-span-2">
                <Label>Rate</Label>
                <Input
                  type="number"
                  step="0.01"
                  value={item.rate}
                  onChange={(e) => updateItem(item.id, 'rate', parseFloat(e.target.value) || 0)}
                />
              </div>
              <div className="col-span-2">
                <Label>Amount</Label>
                <Input
                  type="number"
                  value={item.amount.toFixed(2)}
                  readOnly
                  className="bg-gray-50"
                />
              </div>
              <div className="col-span-1 flex items-end">
                <Button
                  type="button"
                  variant="destructive"
                  size="sm"
                  onClick={() => removeItem(item.id)}
                  disabled={items.length === 1}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ItemsSection;
