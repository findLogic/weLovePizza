import React, { useState, useEffect } from 'react';
import './SliderAd.scss';
import ad1 from '../../assets/sliderElements/ad1.jpg';
import ad2 from '../../assets/sliderElements/ad2.jpg';
import ad3 from '../../assets/sliderElements/ad3.jpg';
import SliderElement from './SliderElement/SliderElement';

const SliderAd = () => {
  const sliderArr = [ad1, ad2, ad3];
  const [x, setX] = useState(0);

  //Arrows
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  // Autoscrolling right
  useEffect(() => {
    let timer = setTimeout(() => goRight(), 8000);
    return () => clearTimeout(timer);
  }, [x]);

  return (
    <div className="slider-ad">
      {sliderArr.map((el, idx) => {
        return (
          <div
            key={idx + 'slide'}
            className="slide"
            style={{
              transform: `translateX(${x}%)`,
            }}>
            <SliderElement el={el} />
          </div>
        );
      })}
      <div className="go-left" onClick={goLeft}>
        <i className="angle left icon"></i>
      </div>
      <div className="go-right" onClick={goRight}>
        <i className="angle right icon"></i>
      </div>
    </div>
  );
};

export default SliderAd;
