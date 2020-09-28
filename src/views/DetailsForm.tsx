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
        current="08"
      />

      <Summary
        className="alna-mt-20"
        subTitle="Just a few more details"
      />

      <Summary
        className="alna-mt-20"
        title="Timeline"
      />

      <Slider
        value={value.details.timeline}
        className="alna-mt-24"
        min={1}
        max={12}
        minText="Yesterday"
        maxText="12 months"
        onChange={x => onChange('details', { ...value.details, timeline: x })}
      />

      <Summary
        className="alna-mt-20"
        title="Number of users"
      />

      <Slider
        value={value.details.users}
        className="alna-mt-24"
        min={49}
        max={5001}
        minText="> 50"
        maxText="5000 <"
        onChange={x => onChange('details', { ...value.details, users: x })}
      />

      <Summary
        className="alna-mt-20"
        title="Complexity"
      />

      <Slider
        value={value.details.budget}
        className="alna-mt-24"
        min={29000}
        max={100001}
        minText="< 30k"
        maxText="100k+"
        onChange={x => onChange('details', { ...value.details, budget: x })}
      />

      <Slider
        value={value.details.complexity}
        className="alna-mt-24"
        min={0}
        max={100}
        minText="simple"
        maxText="Very complex"
        onChange={x => onChange('details', { ...value.details, complexity: x })}
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