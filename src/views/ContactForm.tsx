import React, { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { ImSpinner8 } from 'react-icons/im';

import { Meta, Page, FormData, mapFormDataToModel, FormDataDto } from '../api/form';
import Button from '../components/Button';
import Input from '../components/Input';
import Summary from '../components/Summary';
import StepCounter from '../components/StepCounter';
import { getFieldByValue } from '../hooks/useQuickStartForm';
import { useValidation } from '../hooks/useValidation';
import Img from '../styles/images/robo-9.svg'

interface Props {
  pageData: Page;
  metaData: Meta;
  value: FormData;
  submitting: boolean;
  onChange: <K extends keyof FormData>(name: K, value: FormData[K]) => void
  onSubmit: (value: FormDataDto, onFinish: () => void) => void;
  onNextStep: () => void;
  onPreviousStep: () => void;
}

const ContactForm: React.FC<Props> = ({ pageData, metaData, value, submitting, onChange, onSubmit, onNextStep, onPreviousStep }) => {
  const [anyTouched, setAnyTouched] = useState(false);
  const errors = useValidation(value);

  return (
    <div className="alna-form alna-mt-84">
      <StepCounter
        title={metaData.paginationText}
        max="10"
        current="10"
      />

      <Img style={{ overflow: 'visible' }} />

      <Summary
        className="alna-mt-20"
        subTitle={`${value.firstName} ${pageData.upperTitle}`}
        title={pageData.title}
        shadowLeft={200}
        shadowWidth={50}
      />

      {getFieldByValue('organizationName', pageData) && (
        <>
          <Input
            contact={true}
            disabled={submitting}
            value={value.contactInfo.organizationName}
            className="alna-mt-24 alna-width-80 alna-center"
            placeHolder={getFieldByValue('organizationName', pageData)!.placeholder}
            onChange={x => {
              onChange('contactInfo', { ...value.contactInfo, organizationName: x });
              setAnyTouched(true);
            }}
          />
          <div className="alna-form-error">{anyTouched && errors && errors.organizationName}</div>
        </>
      )}

      {getFieldByValue('email', pageData) && (
        <>
          <Input
            contact={true}
            disabled={submitting}
            value={value.contactInfo.email}
            className="alna-mt-24 alna-width-80 alna-center"
            placeHolder={getFieldByValue('email', pageData)!.placeholder}
            onChange={x => {
              onChange('contactInfo', { ...value.contactInfo, email: x });
              setAnyTouched(true);
            }}
          />
          <div className="alna-form-error">{anyTouched && errors && errors.email}</div>
        </>
      )}

      {getFieldByValue('phone', pageData) && (
        <>
          <Input
            contact={true}
            disabled={submitting}
            value={value.contactInfo.phone}
            className="alna-mt-24 alna-width-80 alna-center"
            placeHolder={getFieldByValue('phone', pageData)!.placeholder}
            onChange={x => {
              onChange('contactInfo', { ...value.contactInfo, phone: x });
              setAnyTouched(true);
            }}
          />
          <div className="alna-form-error">{anyTouched && errors && errors.phone}</div>
        </>
      )}

      <div className="alna-footer">
        <Button
          disabled={submitting}
          type="secondary"
          onClick={onPreviousStep}
        >
          <BsArrowLeft className="alna-mr-30" size={20} />
          {metaData.prevButtonText}
        </Button>
        <Button
          disabled={!!errors}
          onClick={() => onSubmit(mapFormDataToModel(value), onNextStep)}
        >
          {submitting
            ?
            (
              <ImSpinner8 className="icon-spin" size={20} />
            )
            :
            (
              metaData.finishButtonText
            )
          }
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;