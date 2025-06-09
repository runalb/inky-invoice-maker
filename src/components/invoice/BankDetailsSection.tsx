
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { BankDetails } from '@/types/invoice';

interface BankDetailsSectionProps {
  bankDetails: BankDetails;
  setBankDetails: (details: BankDetails) => void;
}

const BankDetailsSection: React.FC<BankDetailsSectionProps> = ({ bankDetails, setBankDetails }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bank Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="bankName">Bank Name</Label>
          <Input
            id="bankName"
            value={bankDetails.bankName}
            onChange={(e) => setBankDetails({ ...bankDetails, bankName: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="branch">Branch/IFSC</Label>
          <Input
            id="branch"
            value={bankDetails.ifsc}
            onChange={(e) => setBankDetails({ ...bankDetails, ifsc: e.target.value })}
            placeholder="IFSC Code"
          />
        </div>
        <div>
          <Label htmlFor="accountNo">Account Number</Label>
          <Input
            id="accountNo"
            value={bankDetails.accountNo}
            onChange={(e) => setBankDetails({ ...bankDetails, accountNo: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="branchName">Branch Name</Label>
          <Input
            id="branchName"
            value={bankDetails.branch}
            onChange={(e) => setBankDetails({ ...bankDetails, branch: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BankDetailsSection;
