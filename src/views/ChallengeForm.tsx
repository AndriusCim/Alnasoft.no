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
  'E.g. I have a project and need development team to implement it. Project is related to tracking of goods and providing that information real time to customers.',
  'Project is related to tracking of goods and providing that information real time to customers.'
]

const ChallengeForm: React.FC<Props> = ({ value, onChange, onNextStep, onPreviousStep }) => {
  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        max="10"
        current="03"
      />

      <div className="alna-mt-20 alna-img alna-robot-challenge-img" />

      <Summary
        className="alna-mt-20"
        subTitle="Great!"
        title="Let's talk about your challenges"
        shadowLeft={200}
        shadowWidth={50}
      />

      <Input
        value={value.challenges}
        className="alna-mt-24"
        placeHolder="Describe the challenge you are facing"
        onChange={x => onChange('challenges', x)}
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

export default ChallengeForm;