import React from 'react';
import { useStep } from 'react-hooks-helper';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';

import './carousel.scss';

interface Props {
    className?: string;
    descriptions: string[];
}

const Carousel: React.FC<Props> = ({ className = '', descriptions }) => {
    const { navigation, step } = useStep({
        initialStep: 1,
        autoAdvanceDuration: 5000,
        steps: descriptions,
    });


    return (
        <div className={`${className} alna-carousel`}>
            <BsArrowLeft className="alna-carousel-arrow" onClick={navigation.previous} />
            <div className="alna-carousel-content">
                {step}
            </div>
            <BsArrowRight className="alna-carousel-arrow" onClick={navigation.next} />
        </div>
    );
};

export default Carousel;