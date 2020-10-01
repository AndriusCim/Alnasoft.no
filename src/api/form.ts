import { useApiGet, useApiPost } from '../hooks/useApi';

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

export type PageType =
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
  otherBusinessArea: string;
  challengeOvercome: string | undefined;
  goal: string | undefined;
  solution: string | undefined;
  details: Resources;
  technologies: string[];
  contactInfo: ContactInfo;
}


export interface OtherSelection {
  placeholder: string;
}

export interface Slider {
  start: string;
  finish: string;
}

export interface SliderGroup {
  value: string;
  title: string;
  sliders: Slider[];
}

export interface Field2 {
  value: string;
  fieldType: string;
  placeholder: string;
}

export interface Field {
  fieldType: string;
  placeholder: string;
  start: string;
  finish: string;
  examples: string[];
  description: string;
  selections: string[];
  otherSelection: OtherSelection;
  sliderGroups: SliderGroup[];
  fields: Field2[];
}

export interface Page {
  pageType: PageType;
  imageFrames: string[];
  upperTitle: string;
  title: string;
  field: Field;
}

export interface Meta {
  paginationText: string;
  prevButtonText: string;
  nexTButtonText: string;
  finishButtonText: string;
  exitButtonText: string;
}

export interface Data {
  pages: Page[];
  meta: Meta;
}

export const postForm = () => {
  const url = 'http://localhost/wp-json/contact-form-7/v1/contact-forms/358/feedback';
  const { state, postData } = useApiPost<FormData>(url);

  return {
    state,
    postData
  };
}

export const getData = () => {
  const url = 'http://localhost/wp-json/form/form_fields';
  const { data, loading, error } = useApiGet<Data>(url);

  return {
    data,
    loading,
    error
  }
};