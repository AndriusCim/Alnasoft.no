import { FormData } from '../api/form';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_NUMBER_REGEX = /^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;

interface Errors {
  email: string;
  phone: string;
  organizationName: string;
}

const emptyErrors: Errors = {
  email: '',
  phone: '',
  organizationName: ''
}

export const useValidation = (values: FormData) => {
  let errors = emptyErrors;

  if (!values.contactInfo.email) {
    errors = { ...errors, email: 'Email address is required' };
  } else if (!EMAIL_REGEX.test(values.contactInfo.email)) {
    errors = { ...errors, email: 'Email address is invalid' };
  }

  if (!values.contactInfo.phone) {
    errors = { ...errors, phone: 'Phone number is required' };
  } else if (!PHONE_NUMBER_REGEX.test(values.contactInfo.phone)) {
    errors = { ...errors, phone: 'Phone number is invalid' };
  }

  if (!values.contactInfo.organizationName) {
    errors = { ...errors, organizationName: 'Organization name is required' };
  }

  return errors === emptyErrors ? undefined : errors;
}