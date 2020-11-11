import React from 'react';

import './summary.scss';

interface Props {
  className?: string
  subTitle?: string;
  title?: string;
  description?: string;
};

const Summary: React.FC<Props> = ({ className, subTitle, title, description }) => {
  return (
    <div className={className}>
      <div className="alna-summary">
        <div className="alna-summary-sub">
          {subTitle}
        </div>
        <div className="alna-summary-title">
          {title}
        </div>
        <div className="alna-summary-desc">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Summary;