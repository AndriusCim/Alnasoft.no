import { useState } from 'react';
import { useForm } from 'react-hooks-helper';
import { getFormData } from '../api/form';

interface Resources {
  timeline: number;
  users: number;
  budget: number;
  complexity: number;
}

interface ContactInfo {
  organizationName: string;
  email: string;
  phone: string;
}

export interface FormData {
  firstName: string | undefined;
  experience: number;
  challenges: string | undefined;
  businessArea: string[];
  challengeOvercome: string | undefined;
  goal: string | undefined;
  solution: string | undefined;
  details: Resources;
  technologies: string[];
  contactInfo: ContactInfo;
}

export type FormSteps =
  'name' |
  'experience' |
  'challenge' |
  'business' |
  'overcome' |
  'goal' |
  'solution' |
  'details' |
  'technologies' |
  'contact' |
  'complete';

export const technologies = [
  'Linux',
  'Azure',
  'C#',
  'JavaScript',
  'React',
  'Windows',
  'Amazon Web Services',
  '.NET',
  'MySQL',
  'TypeScript',
  'Angular',
  'Java',
  'Microsoft SQL Server',
  'PHP',
  'Vue',
  'Scrum',
  'Power BI',
  'Artificial Intelligence',
  'Big Data',
  'Consulting',
  'IT Project Management'
];

export const businessAreas = [
  'Logistics',
  'Finance',
  'Retail',
  'IT Infrastructure',
  'Procurement',
  'Human resource',
  'Marketing & Sales',
  'Business administration & operations',
  'Quality management',
  'Business Intelligence',
  'Risk Management',
  'Compliance management',
  'R&D',
  'Other'
]

const initialData: FormData = {
  firstName: '',
  experience: 70,
  challenges: '',
  businessArea: [],
  challengeOvercome: '',
  goal: '',
  solution: '',
  details: {
    timeline: 1,
    users: 500,
    budget: 45000,
    complexity: 20
  },
  technologies: [],
  contactInfo: {
    organizationName: '',
    email: '',
    phone: ''
  }
}

export const useQuickStartForm = () => {
  const [currentStep, setCurrentStep] = useState<FormSteps>('name');
  const [value, setForm] = useForm<FormData>(initialData);
  const { data } = getFormData();

  console.log(data);
  return {
    currentStep,
    value,
    setCurrentStep,
    change: <K extends keyof FormData>(name: K, value: FormData[K]) => setForm({ target: { name: name, value: value } }),
  }
}