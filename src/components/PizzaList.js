import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPizzas } from '../actions/';

import PizzaCard from './PizzaCard';
import '../styles/PizzaList.scss';
import pizzas from '../assets/pizzas/pizzas.json';

const PizzaList = ({ fetchPizzas, pizzas }) => {
  useEffect(() => {
    fetchPizzas();
    console.log(pizzas);
  }, []);

  const renderPizzas = () => {
    if (!pizzas) return;
    return pizzas.map((pizza) => {
      return (
        <div key={pizza}>
          <PizzaCard
            pizza={pizza}
            title={pizza.name}
            description={pizza.description}
            ingredients={pizza.ingredients}
          />
        </div>
      );
    });
  };

  let content;

  if (!pizzas) {
    content = (
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  } else {
    content = <div>{pizzas.length}</div>;
  }

  return <div>{renderPizzas()}</div>;
};

const mapStateToProps = (state) => ({
  pizzas: state.pizzas,
});

export default connect(mapStateToProps, { fetchPizzas })(PizzaList);
