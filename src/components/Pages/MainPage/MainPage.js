import React from 'react';
import SliderAd from '../../SliderAd/SliderAd';
import PizzaList from '../../PizzaList/PizzaList';
import ShoppingCart from '../../ShoppingCart/ShoppingCart';
import ShoppingCartButton from '../../ShoppingCartButton/ShoppingCartButton';
import PizzaFilter from '../../PizzaFilter/PizzaFilter';
import './MainPage.scss';

const MainPage = () => {
  return (
    <div className="ui container main-page">
      <SliderAd />
      <PizzaFilter />
      <div className="main-page-content">
        <PizzaList />
        <div>
          <div className="sticky-box">
            <ShoppingCart />
          </div>
        </div>
      </div>
      <ShoppingCartButton />
    </div>
  );
};

export default MainPage;
