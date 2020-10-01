import React from 'react';

import './stepCounter.scss';

interface Props {
  title: string;
  className?: string;
  max: string;
  current: string;
}

const StepCounter: React.FC<Props> = ({ title, className = '', max, current }) => {
  return (
    <div className={`${className} alna-step-counter`}>
      <div className="alna-step-counter-main">
        {current}
      </div>
      <div className="alna-step-counter-current">
        {`${title} ${max}`}
      </div>
    </div>
  );
};

export default StepCounter;