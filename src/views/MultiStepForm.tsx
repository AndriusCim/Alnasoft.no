import React from 'react';
import { ImSpinner8 } from 'react-icons/im';

import NameForm from './NameForm';
import ExperienceForm from './ExperienceForm';
import ChallengeForm from './ChallengeForm';
import BusinessAreaForm from './BusinessAreaForm';
import OvercomeForm from './OvercomeForm';
import GoalForm from './GoalForm';
import PerfectSolutionForm from './PerfectSolutionForm';
import DetailsForm from './DetailsForm';
import TechnologiesForm from './TechnologiesForm';
import ContactForm from './ContactForm';
import Complete from './Complete';
import { useQuickStartForm } from '../hooks/useQuickStartForm';
import { PageType, Data } from '../api/form';

const MultiStepForm: React.FC = () => {
  const { value, loading, data, submitting, currentStep, onSubmit, change, setCurrentStep } = useQuickStartForm()

  const getPageData = (pageType: PageType, items: Data) => {
    return items.pages.find(x => x.pageType === pageType)
  }

  const props = (previousStep: PageType, nextStep: PageType, page: PageType, items: Data) => {
    return {
      value,
      pageData: getPageData(page, items)!,
      metaData: items.meta,
      onChange: change,
      onNextStep: () => setCurrentStep(nextStep),
      onPreviousStep: () => setCurrentStep(previousStep)
    }
  }
  if (!data || loading) {
    return <ImSpinner8 className="spinner" />
  }
  switch (currentStep) {
    case 'name':
      return (
        <NameForm
          pageData={getPageData('name', data)!}
          metaData={data.meta}
          value={value}
          onChange={change}
          onNextStep={() => setCurrentStep('experience')}
        />
      );
    case 'experience':
      return <ExperienceForm {...props('name', 'challenge', 'experience', data)} />;
    case 'challenge':
      return <ChallengeForm {...props('experience', 'business', 'challenge', data)} />;
    case 'business':
      return <BusinessAreaForm {...props('challenge', 'overcome', 'business', data)} />
    case 'overcome':
      return <OvercomeForm {...props('business', 'goal', 'overcome', data)} />;
    case 'goal':
      return <GoalForm {...props('overcome', 'solution', 'goal', data)} />;
    case 'solution':
      return <PerfectSolutionForm {...props('goal', 'details', 'solution', data)} />;
    case 'details':
      return <DetailsForm {...props('solution', 'technologies', 'details', data)} />;
    case 'technologies':
      return <TechnologiesForm {...props('details', 'contact', 'technologies', data)} />;
    case 'contact':
      return <ContactForm errors={data.validationErrors} submitting={submitting} onSubmit={onSubmit} {...props('technologies', 'complete', 'contact', data)} />;
    case 'complete':
      return <Complete pageData={getPageData('complete', data)!} metaData={data.meta} />;
    default:
      return null;
  }
};

export default MultiStepForm;