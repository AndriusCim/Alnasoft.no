import React from 'react';

import './checkButton.scss';

interface Props {
    value: string;
    className?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CheckButton: React.FC<Props> = ({ value, className = '', checked, onChange }) => {
    return (
        <div className={className}>
            <label className="alna-switch">
                <input
                    value={value}
                    className="alna-check"
                    checked={checked}
                    type="checkbox"
                    onChange={x => onChange(x.target.checked)}
                />
                <div className="alna-check">{value}</div>
            </label>
        </div>
    );
};

export default CheckButton;