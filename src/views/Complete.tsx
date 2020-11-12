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
  const getHomepageUrl = () => {
    const currentLangCode = document.documentElement.lang;

    if (currentLangCode === 'en-US') {
      return window.location.origin;
    }

    return `${window.location.origin}/${currentLangCode}`
  }

  return (
    <div className="alna-form alna-mt-84">

      <Img className="alna-svg-large" style={{ overflow: 'visible' }} />

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
        title={pageData.title}
      />

      <div className="alna-footer">
        <Anchor
          href={getHomepageUrl()}
        >
          {metaData.exitButtonText}
        </Anchor>
      </div>
    </div>
  );
};

export default ContactForm;