
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { BuyerDetails } from '@/types/invoice';

interface BuyerDetailsSectionProps {
  buyerDetails: BuyerDetails;
  setBuyerDetails: (details: BuyerDetails) => void;
}

const BuyerDetailsSection: React.FC<BuyerDetailsSectionProps> = ({ buyerDetails, setBuyerDetails }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buyer Details</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="buyerName">Buyer Name *</Label>
          <Input
            id="buyerName"
            value={buyerDetails.name}
            onChange={(e) => setBuyerDetails({ ...buyerDetails, name: e.target.value })}
            required
          />
        </div>
        <div>
          <Label htmlFor="buyerAddress">Address</Label>
          <Textarea
            id="buyerAddress"
            value={buyerDetails.address}
            onChange={(e) => setBuyerDetails({ ...buyerDetails, address: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="buyerDistrict">District</Label>
          <Input
            id="buyerDistrict"
            value={buyerDetails.district}
            onChange={(e) => setBuyerDetails({ ...buyerDetails, district: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="buyerGstin">GSTIN/UIN</Label>
          <Input
            id="buyerGstin"
            value={buyerDetails.gstin}
            onChange={(e) => setBuyerDetails({ ...buyerDetails, gstin: e.target.value })}
          />
        </div>
        <div>
          <Label htmlFor="buyerState">State</Label>
          <Input
            id="buyerState"
            value={buyerDetails.state}
            onChange={(e) => setBuyerDetails({ ...buyerDetails, state: e.target.value })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default BuyerDetailsSection;
