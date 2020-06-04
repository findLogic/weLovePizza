import React from 'react';
import '../styles/PizzaList.scss';
import PizzaCard from './PizzaCard';
import pizzas from '../assets/pizzas/pizzas.json';

const PizzaList = () => {
  const renderPizzas = () => {
    return Object.keys(pizzas).map((pizza) => {
      return (
        <div key={pizzas[pizza].id}>
          <PizzaCard
            pizza={pizza}
            title={pizzas[pizza].name}
            description={pizzas[pizza].description}
            ingredients={pizzas[pizza].ingredients}
          />
        </div>
      );
    });
  };

  return <div className="pizza-list">{renderPizzas()}</div>;
};

export default PizzaList;
