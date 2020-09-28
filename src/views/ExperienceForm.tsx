import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Button from '../components/Button';
import Slider from '../components/Slider';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { FormData } from '../hooks/useQuickStartForm';

interface Props {
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const ExperienceForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {

  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="02"
      />

      <div className="alna-mt-20 alna-img alna-robot-experience-img" />

      <Summary
        className="alna-mt-20"
        subTitle={`Nice to meet you, ${value.firstName}!`}
        title="How much experience do you have working with IT projects?"
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
          Previous
          </Button>

        <Button
          onClick={onNextStep}
        >
          Next
          <BsArrowRight className="alna-ml-30" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default ExperienceForm;