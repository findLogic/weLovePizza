import React from 'react';
import SliderAd from './SliderAd';
import '../styles/MainPage.scss';
import PizzaList from './PizzaList';
import ShoppingCart from './ShoppingCart';
import ShoppingCartButton from './ShoppingCartButton';
import PizzaFilter from './PizzaFilter';

const MainPage = () => {
  return (
    <div className="ui container main-page">
      <SliderAd />
      <PizzaFilter />
      <div className="content">
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
