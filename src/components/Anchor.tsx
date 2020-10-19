import React from "react";

import './button.scss';

interface Props {
  className?: string;
  disabled?: boolean;
  type?: 'primary' | 'secondary';
  href: string;
}

const Button: React.FC<Props> = ({ children, disabled = false, className = '', type = 'primary', href }) => {
  const getButtonClassName = () => {
    if (type === 'secondary' && !disabled) {
      return 'alna-button-secondary';
    }

    if (type === 'secondary' && disabled) {
      return 'alna-button-secondary-disabled';
    }

    if (type === 'primary' && disabled) {
      return 'alna-button-disabled';
    }

    return 'alna-button';
  };

  return (
    <div className={className}>
      <a
        target="_parent"
        href={href}
        className={getButtonClassName()}
      >
        {children}
      </a>
    </div>
  );
};

export default Button;