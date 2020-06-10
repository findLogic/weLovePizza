import React from 'react';
import './SliderElement.scss';

const SliderElement = ({ el }) => {
  return (
    <div className="slider-element">
      <img src={el} />
    </div>
  );
};

export default SliderElement;
