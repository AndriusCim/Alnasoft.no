import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';

import Button from '../components/Button';
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


const ContactForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="10"
      />

      <div className="alna-mt-20 alna-img alna-robot-contact-img" />

      <Summary
        className="alna-mt-20"
        subTitle={`${value.firstName}, how can we reach you?`}
        title="Your contact information"
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.contactInfo.organizationName}
        className="alna-mt-24"
        placeHolder="Organization name"
        onChange={x => onChange('contactInfo', { ...value.contactInfo, organizationName: x })}
      />

      <Input
        value={value.contactInfo.email}
        className="alna-mt-24"
        placeHolder="Email"
        onChange={x => onChange('contactInfo', { ...value.contactInfo, email: x })}
      />

      <Input
        value={value.contactInfo.email}
        className="alna-mt-24"
        placeHolder="Phone"
        onChange={x => onChange('contactInfo', { ...value.contactInfo, phone: x })}
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
          Finish
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;