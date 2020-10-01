import React from 'react';

import './input.scss';

interface Props {
  contact?: boolean;
  value?: string | undefined;
  placeHolder: string;
  className: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = ({ contact, value, placeHolder, className, onChange }) => {
  return (
    <div className={className}>
      <input
        value={value}
        className={`${contact ? 'alna-input-contact' : 'alna-input'} alna-font-size-md`}
        placeholder={placeHolder}
        type="text"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;