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

const carouselDescriptions = ['E.g. Reduce spending by 30%', 'Increase audit services sales by 30%'];

const GoalForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="06"
      />

      <div className="alna-mt-20 alna-img alna-robot-goal-img" />

      <Summary
        className="alna-mt-20"
        subTitle="Let's talk about your goals"
        title="What goals you want to achieve?"
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.goal}
        className="alna-mt-24"
        placeHolder="Specify your goals"
        onChange={x => onChange('goal', x)}
      />

      <Carousel className="alna-mt-20" descriptions={carouselDescriptions} />

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

export default GoalForm;