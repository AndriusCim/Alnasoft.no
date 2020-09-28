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
                <span className="alna-check" data-on="Yes" data-off="No">{value}</span>
            </label>
        </div>
    );
};

export default CheckButton;