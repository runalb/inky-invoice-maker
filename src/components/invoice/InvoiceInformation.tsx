
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InvoiceInfo {
  invoiceNo: string;
  date: string;
  deliveryNote: string;
  paymentTerms: string;
  supplierRef: string;
  buyerOrderNo: string;
  dispatchDetails: string;
  destination: string;
  deliveryNoteDate: string;
}

interface InvoiceInformationProps {
  invoiceInfo: InvoiceInfo;
  setInvoiceInfo: (info: InvoiceInfo) => void;
}

const InvoiceInformation: React.FC<InvoiceInformationProps> = ({ invoiceInfo, setInvoiceInfo }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Information</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="invoiceNo">Invoice No. *</Label>
          <Input
            id="invoiceNo"
            value={invoiceInfo.invoiceNo}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, invoiceNo: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            type="date"
            value={invoiceInfo.date}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, date: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="deliveryNote">Delivery Note</Label>
          <Input
            id="deliveryNote"
            value={invoiceInfo.deliveryNote}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, deliveryNote: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="paymentTerms">Payment Terms</Label>
          <Input
            id="paymentTerms"
            value={invoiceInfo.paymentTerms}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, paymentTerms: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="supplierRef">Supplier Ref.</Label>
          <Input
            id="supplierRef"
            value={invoiceInfo.supplierRef}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, supplierRef: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="buyerOrderNo">Buyer Order No.</Label>
          <Input
            id="buyerOrderNo"
            value={invoiceInfo.buyerOrderNo}
            onChange={(e) => setInvoiceInfo({ ...invoiceInfo, buyerOrderNo: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default InvoiceInformation;
