
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InvoiceData, InvoiceItem, CompanyDetails, BuyerDetails, BankDetails } from '@/types/invoice';
import { toast } from '@/hooks/use-toast';
import InvoiceInformation from './invoice/InvoiceInformation';
import BuyerDetailsSection from './invoice/BuyerDetailsSection';
import ItemsSection from './invoice/ItemsSection';
import BankDetailsSection from './invoice/BankDetailsSection';
import TermsSection from './invoice/TermsSection';

interface InvoiceFormProps {
  onSubmit: (data: InvoiceData) => void;
  onUpdate?: (data: InvoiceData) => void;
  initialData?: InvoiceData;
}

const InvoiceForm: React.FC<InvoiceFormProps> = ({ onSubmit, onUpdate, initialData }) => {
  const [companyDetails] = useState<CompanyDetails>({
    name: 'Manorma Industries',
    address: 'M-92, MIDC Nangaon Peth Amravati',
    gstin: '27DXBPB6351N1ZA',
    state: 'Maharashtra, Code: 27',
    contact: '8975575369',
    email: 'manoramaindutry@gmail.com'
  });

  const [buyerDetails, setBuyerDetails] = useState<BuyerDetails>(
    initialData?.buyerDetails || {
      name: '',
      address: '',
      district: '',
      gstin: '',
      state: ''
    }
  );

  const [invoiceInfo, setInvoiceInfo] = useState({
    invoiceNo: initialData?.invoiceNo || '',
    date: initialData?.date || new Date().toISOString().split('T')[0],
    deliveryNote: initialData?.deliveryNote || '',
    paymentTerms: initialData?.paymentTerms || '',
    supplierRef: initialData?.supplierRef || '',
    buyerOrderNo: initialData?.buyerOrderNo || '',
    dispatchDetails: initialData?.dispatchDetails || '',
    destination: initialData?.destination || '',
    deliveryNoteDate: initialData?.deliveryNoteDate || ''
  });

  const [items, setItems] = useState<InvoiceItem[]>(
    initialData?.items || [
      {
        id: '1',
        srNo: 1,
        description: '',
        hsnCode: '',
        gstRate: 5,
        quantity: 0,
        rate: 0,
        unit: 'Nos',
        amount: 0
      }
    ]
  );

  const [bankDetails, setBankDetails] = useState<BankDetails>(
    initialData?.bankDetails || {
      bankName: 'UCO Bank',
      branch: '',
      ifsc: '',
      accountNo: ''
    }
  );

  const [termsAndConditions, setTermsAndConditions] = useState(
    initialData?.termsAndConditions || '1. Payment should be made within 30 days.\n2. All disputes subject to local jurisdiction.'
  );

  // Trigger live update whenever form data changes
  useEffect(() => {
    if (onUpdate) {
      const invoiceData: InvoiceData = {
        ...invoiceInfo,
        companyDetails,
        buyerDetails,
        items,
        bankDetails,
        termsAndConditions,
        subtotal: 0,
        cgst: 0,
        sgst: 0,
        roundOff: 0,
        total: 0,
        amountInWords: ''
      };
      onUpdate(invoiceData);
    }
  }, [companyDetails, buyerDetails, invoiceInfo, items, bankDetails, termsAndConditions, onUpdate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!invoiceInfo.invoiceNo) {
      toast({ title: "Error", description: "Invoice number is required", variant: "destructive" });
      return;
    }

    if (!buyerDetails.name) {
      toast({ title: "Error", description: "Buyer name is required", variant: "destructive" });
      return;
    }

    const invoiceData: InvoiceData = {
      ...invoiceInfo,
      companyDetails,
      buyerDetails,
      items,
      bankDetails,
      termsAndConditions,
      subtotal: 0,
      cgst: 0,
      sgst: 0,
      roundOff: 0,
      total: 0,
      amountInWords: ''
    };

    onSubmit(invoiceData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-6">
      <InvoiceInformation invoiceInfo={invoiceInfo} setInvoiceInfo={setInvoiceInfo} />
      <BuyerDetailsSection buyerDetails={buyerDetails} setBuyerDetails={setBuyerDetails} />
      <ItemsSection items={items} setItems={setItems} />
      <BankDetailsSection bankDetails={bankDetails} setBankDetails={setBankDetails} />
      <TermsSection termsAndConditions={termsAndConditions} setTermsAndConditions={setTermsAndConditions} />

      <div className="flex justify-center">
        <Button type="submit" size="lg" className="w-full md:w-auto">
          Generate Invoice
        </Button>
      </div>
    </form>
  );
};

export default InvoiceForm;
