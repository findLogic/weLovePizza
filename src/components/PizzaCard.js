import React from 'react';
import '../styles/PizzaCard.scss';

const PizzaCard = ({ title, pizza, description, ingredients }) => {
  const bgImg = require(`../assets/pizzas/${pizza}.jpg`);

  return (
    <div className="pizza-card">
      <div
        style={{
          width: '100%',
          height: '300px',
          backgroundImage: `url(${bgImg})`,
        }}></div>
      <div className="content">
        <h3>{title}</h3>
        <div className="pizza-icons">
          <div className="persons">
            1<i className="icon user small"></i>
          </div>
        </div>
        <p>{description}</p>
        <p>{ingredients.join(', ')}</p>
      </div>
    </div>
  );
};

export default PizzaCard;
