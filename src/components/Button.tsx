import React from "react";

import './button.scss';

interface Props {
    className?: string;
    disabled?: boolean;
    type?: 'primary' | 'secondary';
    onClick: () => void;
}

const Button: React.FC<Props> = ({ children, disabled = false, className = '', type = 'primary', onClick }) => {
    if (type === 'secondary') {
        return (
            <div className={className}>
                <button
                    className="alna-button-secondary"
                    disabled={disabled}
                    onClick={onClick}
                >
                    {children}
                </button>
            </div>
        )
    }

    return (
        <div className={className}>
            <button
                className={disabled ? 'alna-button-disabled' : 'alna-button'}
                disabled={disabled}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;