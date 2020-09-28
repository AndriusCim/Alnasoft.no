import React from 'react';

import './summary.scss';

interface Props {
    className?: string
    subTitle?: string;
    title?: string;
    description?: string;
    shadowLeft?: number;
    shadowWidth?: number;
};

const Summary: React.FC<Props> = ({ className, subTitle, title, description, shadowLeft, shadowWidth }) => {
    return (
        <div className={className}>
            <div className="alna-summary">
                <div className="alna-summary-sub">
                    {subTitle}
                </div>
                <div className="alna-summary-title">
                    {title}
                    {shadowLeft && shadowWidth && (
                        <div
                            className="alna-summary-shadow"
                            style={{ left: shadowLeft, width: shadowWidth }}
                        />
                    )}
                </div>
                <div className="alna-summary-desc">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default Summary;