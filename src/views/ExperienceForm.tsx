import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { Meta, Page, FormData } from '../api/form';
import Button from '../components/Button';
import Slider from '../components/Slider';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import Img from '../styles/images/robo-2.svg'

interface Props {
  pageData: Page;
  metaData: Meta;
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const ExperienceForm: React.FC<Props> = ({ pageData, metaData, value, onChange, onNextStep, onPreviousStep }) => {

  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        title={metaData.paginationText}
        max="10"
        current="02"
      />

      <Img style={{ overflow: 'visible' }} />

      <Summary
        className="alna-mt-20"
        subTitle={`${pageData.upperTitle} ${value.firstName}!`}
        title={pageData.title}
        shadowLeft={520}
        shadowWidth={120}
      />

      <Slider
        value={value.experience}
        className="alna-mt-24"
        min={0}
        max={100}
        minText="None"
        maxText="A lot"
        onChange={value => onChange('experience', value)}
      />

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

export default ExperienceForm;