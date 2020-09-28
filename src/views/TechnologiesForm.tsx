import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Button from '../components/Button';
import CheckButton from '../components/CheckButton';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { FormData, technologies } from '../hooks/useQuickStartForm';

interface Props {
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const TechnologiesForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  const handleChange = (x: string, checked: boolean) => {
    const selected = checked
      ? [...value.technologies, x]
      : value.technologies.filter(y => y !== x);

    onChange('technologies', selected);
  };

  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="09"
      />

      <div className="alna-mt-20 alna-img alna-robot-tech-img" />

      <Summary
        className="alna-mt-20"
        subTitle="And lastly"
        title="Preferred technologies and services"
        description="You can select multiple options or none"
        shadowLeft={200}
        shadowWidth={50}
      />

      <div className="alna-mt-24 alna-check-button-group">
        {technologies.map((x, i) => (
          <CheckButton
            key={i}
            value={x}
            checked={value.technologies.includes(x)}
            onChange={checked => handleChange(x, checked)}
          />
        ))}
      </div>

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

export default TechnologiesForm;