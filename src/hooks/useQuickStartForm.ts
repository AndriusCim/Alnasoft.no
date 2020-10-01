import { useState } from 'react';
import { useForm } from 'react-hooks-helper';
import { getData, postForm, PageType, FormData, Page } from '../api/form';

const initialData: FormData = {
  firstName: '',
  experience: 70,
  challenges: '',
  businessArea: [],
  otherBusinessArea: '',
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

export const getFieldByValue = (value: string, item: Page) => {
  return item.field.fields.find(x => x.value === value);
}

export const getSliderByValue = (value: string, item: Page) => {
  return item.field.sliderGroups.find(x => x.value === value);
}

export const useQuickStartForm = () => {
  const [currentStep, setCurrentStep] = useState<PageType>('name');
  const [value, setForm] = useForm<FormData>(initialData);
  const { data, loading } = getData();
  const {state, postData} = postForm();

  return {
    loading,
    submitting: state.loading,
    currentStep,
    data,
    value,
    onSubmit: postData,
    setCurrentStep,
    change: <K extends keyof FormData>(name: K, value: FormData[K]) => setForm({ target: { name: name, value: value } }),
  }
}