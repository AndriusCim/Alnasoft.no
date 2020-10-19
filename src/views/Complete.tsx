import React from 'react';
import { Meta, Page } from '../api/form';
import Anchor from '../components/Anchor';
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
        <Anchor
          href={window.parent.location.href}
        >
          {metaData.exitButtonText}
        </Anchor>
      </div>
    </div>
  );
};

export default ContactForm;