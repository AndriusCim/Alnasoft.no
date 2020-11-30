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

const Textarea: React.FC<Props> = ({ disabled = false, contact = false, value, placeHolder, className, onChange }) => {
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
            <textarea
                style={{ height: 85 }}
                disabled={disabled}
                value={value}
                className={`${getInputClassName()} alna-font-size-md`}
                placeholder={placeHolder}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default Textarea;