import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPizzas } from '../actions/';

import PizzaCard from './PizzaCard';
import '../styles/PizzaList.scss';

const PizzaList = ({ fetchPizzas, pizzas }) => {
  useEffect(() => {
    fetchPizzas();
  }, []);

  const renderPizzas = () => {
    if (!pizzas) return;
    return pizzas.map((pizza) => {
      const properties = JSON.parse(pizza.properties);
      return (
        <div key={pizza.id}>
          <PizzaCard properties={properties} />
        </div>
      );
    });
  };

  let content;

  if (!pizzas) {
    content = (
      <div className="pizza-list-loading">
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  } else {
    content = <>{renderPizzas()}</>;
  }

  return <div className="pizza-list">{content}</div>;
};

const mapStateToProps = (state) => ({
  pizzas: state.pizzas,
});

export default connect(mapStateToProps, { fetchPizzas })(PizzaList);
