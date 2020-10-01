import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { Meta, Page, FormData } from '../api/form';
import Button from '../components/Button';
import Slider from '../components/Slider';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { getSliderByValue } from '../hooks/useQuickStartForm';

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
        current="08"
      />

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
      />
      {getSliderByValue('timeline', pageData) && (
        <>
          <Summary
            className="alna-mt-20"
            title={getSliderByValue('timeline', pageData)!.title}
          />

          <Slider
            value={value.details.timeline}
            className="alna-mt-24"
            min={1}
            max={12}
            minText={getSliderByValue('timeline', pageData)!.sliders[0].start}
            maxText={getSliderByValue('timeline', pageData)!.sliders[0].finish}
            onChange={x => onChange('details', { ...value.details, timeline: x })}
          />
        </>
      )}

      {getSliderByValue('users', pageData) && (
        <>
          <Summary
            className="alna-mt-20"
            title={getSliderByValue('users', pageData)!.title}
          />

          <Slider
            value={value.details.users}
            className="alna-mt-24"
            min={49}
            max={5001}
            minText={getSliderByValue('users', pageData)!.sliders[0].start}
            maxText={getSliderByValue('users', pageData)!.sliders[0].finish}
            onChange={x => onChange('details', { ...value.details, users: x })}
          />
        </>
      )}

      {getSliderByValue('budget', pageData) && (
        <>
          <Summary
            className="alna-mt-20"
            title={getSliderByValue('budget', pageData)!.title}
          />

          <Slider
            value={value.details.budget}
            className="alna-mt-24"
            min={29000}
            max={100001}
            minText={getSliderByValue('budget', pageData)!.sliders[0].start}
            maxText={getSliderByValue('budget', pageData)!.sliders[0].finish}
            onChange={x => onChange('details', { ...value.details, budget: x })}
          />
        </>
      )}

      {getSliderByValue('complexity', pageData) && (
        <>
          <Summary
            className="alna-mt-20"
            title={getSliderByValue('complexity', pageData)!.title}
          />

          <Slider
            value={value.details.complexity}
            className="alna-mt-24"
            min={0}
            max={100}
            minText={getSliderByValue('complexity', pageData)!.sliders[0].start}
            maxText={getSliderByValue('complexity', pageData)!.sliders[0].finish}
            onChange={x => onChange('details', { ...value.details, complexity: x })}
          />
        </>
      )}

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