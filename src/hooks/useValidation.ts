import { ErrorMessages, FormData } from '../api/form';

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

export const useValidation = (values: FormData, messages: ErrorMessages) => {
  let errors = emptyErrors;

  if (!values.contactInfo.email) {
    errors = { ...errors, email: messages.emailEmpty };
  } else if (!EMAIL_REGEX.test(values.contactInfo.email)) {
    errors = { ...errors, email: messages.emailNotValid};
  }

  if (!values.contactInfo.phone) {
    errors = { ...errors, phone: messages.phoneEmpty };
  } else if (!PHONE_NUMBER_REGEX.test(values.contactInfo.phone)) {
    errors = { ...errors, phone: messages.phoneNotValid };
  }

  if (!values.contactInfo.organizationName) {
    errors = { ...errors, organizationName: messages.organizationEmpty };
  }

  return errors === emptyErrors ? undefined : errors;
}