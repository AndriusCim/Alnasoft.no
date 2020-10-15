import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { Meta, Page, FormData } from '../api/form';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Input from '../components/Input';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import Img from '../styles/images/robo-3.svg';

interface Props {
  pageData: Page;
  metaData: Meta;
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const ChallengeForm: React.FC<Props> = ({ pageData, metaData, value, onChange, onNextStep, onPreviousStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        title={metaData.paginationText}
        max="10"
        current="03"
      />

      <Img style={{ overflow: 'visible' }} />

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
        title={pageData.title}
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.challenges}
        className="alna-mt-24 alna-width-80 alna-center"
        placeHolder={pageData.field.placeholder}
        onChange={x => onChange('challenges', x)}
      />

      <Carousel className="alna-mt-20" descriptions={pageData.field.examples} />

      <div className="alna-footer">
        <Button
          type="secondary"
          onClick={onPreviousStep}
        >
          <BsArrowLeft className="alna-mr-30" size={20} />
          {metaData.prevButtonText}
        </Button>
        <Button
          onClick={onNextStep}
        >
          {metaData.nexTButtonText}
          <BsArrowRight className="alna-ml-30" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ChallengeForm;