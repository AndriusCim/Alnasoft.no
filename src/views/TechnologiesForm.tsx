import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { Meta, Page, FormData } from '../api/form';
import Button from '../components/Button';
import CheckButton from '../components/CheckButton';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import Img from '../styles/images/robo-8.svg'

interface Props {
  pageData: Page;
  metaData: Meta;
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const TechnologiesForm: React.FC<Props> = ({ metaData, pageData, value, onChange, onNextStep, onPreviousStep }) => {
  const handleChange = (x: string, checked: boolean) => {
    const selected = checked
      ? [...value.technologies, x]
      : value.technologies.filter(y => y !== x);

    onChange('technologies', selected);
  };

  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        title={metaData.paginationText}
        max="10"
        current="09"
      />

      <Img style={{ overflow: 'visible' }} />

      <Summary
        className="alna-mt-20"
        subTitle={pageData.upperTitle}
        title={pageData.title}
        description={pageData.field.description}
        shadowLeft={200}
        shadowWidth={50}
      />

      <div className="alna-mt-24 alna-check-button-group">
        {pageData.field.selections.map((x, i) => (
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

export default TechnologiesForm;