import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import Button from '../components/Button';
import CheckButton from '../components/CheckButton';
import Input from '../components/Input';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { FormData, businessAreas } from '../hooks/useQuickStartForm';

interface Props {
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const BusinessAreaForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  const handleChange = (x: string, checked: boolean) => {
    const selected = checked
      ? [...value.businessArea, x]
      : value.businessArea.filter(y => y !== x);

    onChange('businessArea', selected);
  };

  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="04"
      />

      <div className="alna-mt-20 alna-img alna-robot-business-img" style={{ height: 230 }} />

      <Summary
        className="alna-mt-20"
        subTitle="Got it"
        title="Which business area the challenge is related to?"
        description="You can select multiple options"
        shadowLeft={200}
        shadowWidth={50}
      />

      <div className="alna-mt-24 alna-check-button-group">
        {businessAreas.map((x, i) => (
          <CheckButton
            key={i}
            value={x}
            checked={value.businessArea.includes(x)}
            onChange={checked => handleChange(x, checked)}
          />
        ))}
      </div>

      <Input
        className="alna-mt-24"
        placeHolder="Other business area"
        onChange={x => onChange('businessArea', [...value.businessArea, x])}
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

export default BusinessAreaForm;