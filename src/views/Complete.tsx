import React from 'react';
import { Meta, Page } from '../api/form';
import Button from '../components/Button';
import Summary from '../components/Summary';
import Img from '../styles/images/robo-10.svg';

interface Props {
  pageData: Page;
  metaData: Meta;
}

const ContactForm: React.FC<Props> = ({ metaData, pageData }) => {
  return (
    <div className="alna-form alna-mt-84">

      <Img style={{ overflow: 'visible' }} />

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
        title={pageData.title}
        shadowLeft={200}
        shadowWidth={50}
      />

      <div className="alna-footer">
        <Button
          onClick={() => window.open(window.location.origin, '_self')}
        >
          {metaData.exitButtonText}
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;