import React from 'react';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import { Meta, Page, FormData } from '../api/form';
import Button from '../components/Button';
import Slider from '../components/Slider';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { getSliderByValue } from '../hooks/useQuickStartForm';
import TimeSm from '../styles/assets/timeSm.svg';
import TimeMd from '../styles/assets/timeMd.svg';
import TimeLg from '../styles/assets/timeLg.svg';
import UsersSm from '../styles/assets/usersSm.svg';
import UsersMd from '../styles/assets/usersMd.svg';
import UsersLg from '../styles/assets/usersLg.svg';
import BudgetSm from '../styles/assets/budgetSm.svg';
import BudgetMd from '../styles/assets/budgetMd.svg';
import BudgetLg from '../styles/assets/budgetLg.svg';
import ComplexSm from '../styles/assets/complexSm.svg';
import ComplexMd from '../styles/assets/complexMd.svg';
import ComplexLg from '../styles/assets/complexLg.svg';

interface Props {
  pageData: Page;
  metaData: Meta;
  value: FormData;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const ExperienceForm: React.FC<Props> = ({ pageData, metaData, value, onChange, onNextStep, onPreviousStep }) => {
  const getPercentage = (partialValue: number, totalValue: number) => {
    return (100 * partialValue) / totalValue;
  }

  const getTimeImage = (value: number, totalValue: number) => {
    const percent = Math.round(getPercentage(value, totalValue));

    if (percent >= 0 && percent <= 33) {
      return <TimeSm />
    }
    if (percent >= 34 && percent <= 66) {
      return <TimeMd />
    }
    if (percent >= 67 && percent <= 100) {
      return <TimeLg />
    }

    return undefined;
  }

  const getUsersImage = (value: number, totalValue: number) => {
    const percent = Math.round(getPercentage(value, totalValue));

    if (percent >= 0 && percent <= 33) {
      return <UsersSm />
    }
    if (percent >= 34 && percent <= 66) {
      return <UsersMd />
    }
    if (percent >= 67 && percent <= 100) {
      return <UsersLg />
    }

    return undefined;
  }

  const getBudgetImage = (value: number, totalValue: number) => {
    const percent = Math.round(getPercentage(value, totalValue));

    if (percent >= 0 && percent <= 33) {
      return <BudgetSm />
    }
    if (percent >= 34 && percent <= 66) {
      return <BudgetMd />
    }
    if (percent >= 67 && percent <= 100) {
      return <BudgetLg />
    }

    return undefined;
  }

  const getComplexImage = (value: number, totalValue: number) => {
    const percent = Math.round(getPercentage(value, totalValue));

    if (percent >= 0 && percent <= 33) {
      return <ComplexSm />
    }
    if (percent >= 34 && percent <= 66) {
      return <ComplexMd />
    }
    if (percent >= 67 && percent <= 100) {
      return <ComplexLg />
    }

    return undefined;
  }

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

          <div style={{ height: '70px' }}className="alna-center alna-mt-20">
            {getTimeImage(value.details.timeline, 12)}
          </div>

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

          <div style={{ height: '70px' }} className="alna-center alna-mt-20">
            {getUsersImage(value.details.users, 5001)}
          </div>

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

          <div style={{ height: '70px' }} className="alna-center alna-mt-20">
            {getBudgetImage(value.details.budget, 100001)}
          </div>

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

          <div style={{ height: '70px' }} className="alna-center alna-mt-20">
            {getComplexImage(value.details.complexity, 100)}
          </div>

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