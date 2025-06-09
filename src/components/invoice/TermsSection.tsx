
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

interface TermsSectionProps {
  termsAndConditions: string;
  setTermsAndConditions: (terms: string) => void;
}

const TermsSection: React.FC<TermsSectionProps> = ({ termsAndConditions, setTermsAndConditions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Terms and Conditions</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          value={termsAndConditions}
          onChange={(e) => setTermsAndConditions(e.target.value)}
          rows={4}
          placeholder="Enter terms and conditions..."
        />
      </CardContent>
    </Card>
  );
};

export default TermsSection;
