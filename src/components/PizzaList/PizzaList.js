import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPizzas, fetchCurrency } from '../../actions';

import PizzaCard from './PizzaCard/PizzaCard';
import './PizzaList.scss';

const PizzaList = ({ fetchPizzas, fetchCurrency, pizzas }) => {
  useEffect(() => {
    fetchCurrency();
    fetchPizzas(1);
  }, []);

  const renderPizzas = () => {
    if (!pizzas) return;
    return pizzas.map((pizza) => {
      return (
        <div key={pizza.id}>
          <PizzaCard properties={pizza.properties} />
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

export default connect(mapStateToProps, { fetchPizzas, fetchCurrency })(
  PizzaList,
);
