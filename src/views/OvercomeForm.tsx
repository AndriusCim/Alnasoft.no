import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Button from '../components/Button';
import Carousel from '../components/Carousel';
import Input from '../components/Input';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { FormData } from '../hooks/useQuickStartForm';

interface Props {
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const carouselDescriptions = ['We had internal software development', 'E.g. I have a project and need development team to implement it.'];

const OvercomeForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="05"
      />

      <div className="alna-mt-20 alna-img alna-robot-overcome-img" />

      <Summary
        className="alna-mt-20"
        subTitle="And a bit more about it"
        title="What have you already tried to overcome the challenge?"
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.challengeOvercome}
        className="alna-mt-24"
        placeHolder="Tell us about it"
        onChange={x => onChange('challengeOvercome', x)}
      />

      <Carousel descriptions={carouselDescriptions} />

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

export default OvercomeForm;