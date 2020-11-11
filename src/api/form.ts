import { useApiGet, useApiPost } from '../hooks/useApi';

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

export interface ErrorMessages {
  emailEmpty: string,
  emailNotValid: string,
  organizationEmpty: string,
  phoneEmpty: string,
  phoneNotValid: string,
}

export interface Data {
  pages: Page[];
  meta: Meta;
  validationErrors: ErrorMessages;
}

export interface FormData {
  firstName: string | undefined;
  experience: number;
  challenges: string | undefined;
  businessArea: string[];
  otherBusinessArea: string | undefined;
  challengeOvercome: string | undefined;
  goal: string | undefined;
  solution: string | undefined;
  details: Resources;
  technologies: string[];
  contactInfo: ContactInfo;
}

export interface FormDataDto {
  firstName: string | undefined;
  experience: number;
  challenges: string | undefined;
  businessArea: string;
  challengeOvercome: string | undefined;
  goal: string | undefined;
  solution: string | undefined;
  detailsTimeline: number;
  detailsUsers: number;
  detailsBudget: number;
  detailsComplexity: number;
  technologies: string | undefined;
  organizationName: string;
  email: string;
  phone: string;
}

export const mapFormDataToModel = (x: FormData): FormDataDto => {
  x.businessArea.push(x.otherBusinessArea || '');

  return {
  firstName: x.firstName,
  experience: x.experience,
  challenges: x.challenges,
  businessArea: x.businessArea.join(', ') || '',
  challengeOvercome: x.challengeOvercome,
  goal: x.goal,
  solution: x.solution,
  detailsTimeline: x.details.timeline,
  detailsBudget: x.details.budget,
  detailsUsers: x.details.users,
  detailsComplexity: x.details.complexity,
  technologies: x.technologies.join(', ') || '',
  organizationName: x.contactInfo.organizationName,
  email: x.contactInfo.email,
  phone: x.contactInfo.phone
}};

export const postForm = () => {
  const url = '/wp-json/contact-form-7/v1/contact-forms/692/feedback';
  const { state, postData } = useApiPost<FormDataDto>(url);

  return {
    state,
    postData
  };
}

export const getData = () => {
  const url = `/wp-json/form/form_fields?lang=${window.parent.document.documentElement.lang}`;
  const { data, loading, error } = useApiGet<Data>(url);

  return {
    data,
    loading,
    error
  }
};