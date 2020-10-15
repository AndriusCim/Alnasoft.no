import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import { Meta, Page, FormData } from '../api/form';
import Button from '../components/Button';
import Input from '../components/Input';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import Img from '../styles/images/robo-1.svg'

interface Props {
  pageData: Page;
  metaData: Meta;
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
}

const NameForm: React.FC<Props> = ({ pageData, metaData, value, onChange, onNextStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        title={metaData.paginationText}
        max="10"
        current="01"
      />

      <Img style={{ overflow: 'visible' }}/>

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
        title={pageData.title}
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.firstName}
        className="alna-mt-24 alna-center"
        placeHolder={pageData.field.placeholder}
        onChange={x => onChange('firstName', x)}
      />

      <div className="alna-footer">
        <Button
          disabled={!value.firstName}
          onClick={onNextStep}
        >
          {metaData.nexTButtonText}
          <BsArrowRight className="alna-ml-30" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default NameForm;