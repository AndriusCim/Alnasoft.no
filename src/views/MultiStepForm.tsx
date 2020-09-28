import React from 'react';

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
import { FormSteps, useQuickStartForm } from '../hooks/useQuickStartForm';

const MultiStepForm: React.FC = () => {
    const { value, currentStep, change, setCurrentStep } = useQuickStartForm()

    const props = (previousStep: FormSteps, nextStep: FormSteps) => {
        return {
            value,
            onChange: change,
            onNextStep: () => setCurrentStep(nextStep),
            onPreviousStep: () => setCurrentStep(previousStep)
        }
    }

    switch (currentStep) {
        case 'name':
            return (
                <NameForm
                    value={value}
                    onChange={change}
                    onNextStep={() => setCurrentStep('experience')}
                />
            );
        case 'experience':
            return <ExperienceForm {...props('name', 'challenge')} />;
        case 'challenge':
            return <ChallengeForm {...props('experience', 'business')} />;
        case 'business':
            return <BusinessAreaForm {...props('challenge', 'overcome')} />
        case 'overcome':
            return <OvercomeForm {...props('business', 'goal')} />;
        case 'goal':
            return <GoalForm {...props('overcome', 'solution')} />;
        case 'solution':
            return <PerfectSolutionForm {...props('goal', 'details')} />;
        case 'details':
            return <DetailsForm {...props('solution', 'technologies')} />;
        case 'technologies':
            return <TechnologiesForm {...props('details', 'contact')} />;
        case 'contact':
            return <ContactForm {...props('technologies', 'complete')} />;
        case 'complete':
            return <Complete />;
        default:
            return null;
    }
};

export default MultiStepForm;