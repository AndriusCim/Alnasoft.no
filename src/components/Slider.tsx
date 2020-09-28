import React from 'react';

import './slider.scss';

interface Props {
    value: number;
    min: number;
    max: number;
    minText: string;
    maxText: string;
    className?: string;
    onChange: (value: number) => void;
}

const Slider: React.FC<Props> = ({ value, min, max, minText, maxText, className, onChange }) => {

    return (
        <div className={`${className} alna-slider-container`}>
            <div className="alna-slider-text">
                <div>
                    {minText}
                </div>
                <div>
                    {maxText}
                </div>
            </div>
            <div style={{ margin: '0 16px' }}>
                <input
                    className="alna-slider"
                    type="range"
                    value={value}
                    min={min}
                    max={max}
                    onChange={e => onChange(e.target.valueAsNumber)}
                />
            </div>
        </div>
    );
};

export default Slider;