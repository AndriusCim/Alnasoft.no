import React from 'react';
import Button from '../components/Button';
import Summary from '../components/Summary';

const ContactForm: React.FC = () => {
  return (
    <div className="alna-form alna-mt-84">
      <div className="alna-mt-20 alna-img alna-robot-complete-img" />

      <Summary
        className="alna-mt-20"
        subTitle="Well done!"
        title="You will receive your Quick Start file in your inbox"
        shadowLeft={200}
        shadowWidth={50}
      />

      <div className="alna-footer">
        <Button
          onClick={() => console.log()}
        >
          Head to home page
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;