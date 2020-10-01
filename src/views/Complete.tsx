import React from 'react';
import { Meta, Page } from '../api/form';
import Button from '../components/Button';
import Summary from '../components/Summary';

interface Props {
  pageData: Page;
  metaData: Meta;
}

const ContactForm: React.FC<Props> = ({ metaData, pageData }) => {
  return (
    <div className="alna-form alna-mt-84">
      <div className="alna-mt-20 alna-img alna-robot-complete-img" />

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
        title={pageData.title}
        shadowLeft={200}
        shadowWidth={50}
      />

      <div className="alna-footer">
        <Button
          onClick={() => window.open('alnasoft.no', '_self')}
        >
          {metaData.finishButtonText}
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;