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

const carouselDescriptions = [
  'E.g. You provide 2 Agile development teams with Scrum masters. We own Product Owner role and Product management.',
  'You develop software, we enjoy the profit.'
];

const GoalForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="07"
      />

      <div className="alna-mt-20 alna-img alna-robot-solution-img" />

      <Summary
        className="alna-mt-20"
        subTitle="Almost there"
        title="What do you see as perfect solution?"
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.solution}
        className="alna-mt-24"
        placeHolder="Describe your perfect solution"
        onChange={x => onChange('solution', x)}
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

export default GoalForm;