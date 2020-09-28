import { useApi } from '../hooks/useApi';

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

interface FormDataDto {
  pageType: FormSteps;
  upperTitle: string;
  imageFrames: string[];
  field: {
    fieldType: string;
    description: string;
    placeHolder: string;
    examples: string[];
    selections: string[];
    sliderGroups: {
      title: string;
      sliders: {
        start: string;
        finish: string;
      }[];
    };
    otherSelection: {
      placeholder: string;
    };
    meta: {
      paginationText: string;
      prevButtonText: string;
      nexTButtonText: string;
      finishButtonText: string;
      exitButtonText: string;
    }
  }
};

export const getFormData = () => {
  const url = 'http://localhost/alnasoft/wp-json/form/form_fields';
  const { data, loading, error } = useApi(url);
  return {
    data,
    loading,
    error
  }
};