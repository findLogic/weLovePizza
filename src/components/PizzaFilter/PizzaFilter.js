import React from 'react';
import './PizzaFilter.scss';
import ChangeCurrency from './ChangeCurrency/ChangeCurrency';

const PizzaFilter = () => {
  return (
    <div className="pizza-filter">
      <ChangeCurrency />
    </div>
  );
};

export default PizzaFilter;
