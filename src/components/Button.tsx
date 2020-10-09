import React from "react";

import './button.scss';

interface Props {
    className?: string;
    disabled?: boolean;
    type?: 'primary' | 'secondary';
    onClick: () => void;
}

const Button: React.FC<Props> = ({ children, disabled = false, className = '', type = 'primary', onClick }) => {
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
            <button
                className={getButtonClassName()}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;