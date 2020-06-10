import React from 'react';
import './PizzaCardIngredient.scss';

const PizzaCardIngredient = ({ ing }) => {
  const { ingredient, isActive } = ing;
  const ingText = ingredient[0].toUpperCase() + ingredient.slice(1);

  const renderIcon = () => {
    return isActive ? (
      <i className="close icon small"></i>
    ) : (
      <i className="redo icon small"></i>
    );
  };

  return (
    <div className="pizza-card-ingredient">
      {ingText}
      {renderIcon()}
    </div>
  );
};

export default PizzaCardIngredient;
