import React from 'react';

import './input.scss';

interface Props {
  disabled?: boolean
  contact?: boolean;
  value?: string | undefined;
  placeHolder: string;
  className: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({ disabled = false, contact = false, value, placeHolder, className, onChange }) => {
  const getInputClassName = () => {
    if (contact && !disabled) {
      return "alna-input-contact";
    }

    if (contact && disabled) {
      return "alna-input-contact-disabled";
    }

    if (!contact && disabled) {
      return "alna-input-disabled";
    }

    return "alna-input";
  }

  return (
    <div className={className}>
      <input
        disabled={disabled}
        value={value}
        className={`${getInputClassName()} alna-font-size-md`}
        placeholder={placeHolder}
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;