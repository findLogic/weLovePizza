import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PizzaCardIngredient from './PizzaCardIngredient/PizzaCardIngredient';
import { addPizzaToCart } from '../../../actions';
import { connect } from 'react-redux';
import './PizzaCard.scss';
import WithPopup from '../../HOC/WithPopup';

const PizzaCard = ({ properties, addPizzaToCart, currency }) => {
  // Props
  const {
    description,
    title,
    crust,
    hit,
    ingredients,
    nova,
    price,
    size,
    spicy,
    vegan,
    image,
    initPrice,
  } = properties;

  const bgImg = require(`../../../assets/pizzas/${image}`);

  // STATE
  const [showIngredients, setShowIngredients] = useState(false);
  const [selectedCrust, setSelectedCrust] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState(
    ingredients.map((ing) => ({ ingredient: ing, isActive: true })),
  );

  // Helper methods and const
  const bgStyle = {
    background: `no-repeat center url(${bgImg})`,
  };

  const toggleIngredient = (index) => {
    setSelectedIngredients(
      selectedIngredients.map((el, idx) => {
        return index === idx
          ? {
              ingredient: el.ingredient,
              isActive: !el.isActive,
            }
          : el;
      }),
    );
  };

  const handleAddToCart = () => {
    const removedIngredients = [
      ...selectedIngredients.filter((el) => !el.isActive),
    ];

    // Pizza object that goes to redux store
    const pizzaObj = {
      title,
      id: uuidv4(),
      crust: crust[selectedCrust],
      size: size[selectedSize],
      quantity: 1,
      extraIngredients: [],
      removedIngredients,
      initPrice: initPrice[selectedSize],
      price: price[selectedSize],
    };

    setSelectedIngredients(
      ingredients.map((ing) => ({ ingredient: ing, isActive: true })),
    );
    setShowIngredients(false);
    addPizzaToCart(pizzaObj);
  };

  // Rendering methods
  const renderHit = () =>
    hit ? <div className="pizza-hit-new">Hit!</div> : '';

  const renderNew = () =>
    nova ? <div className="pizza-hit-new">New</div> : '';

  const renderSpicy = () =>
    spicy ? (
      <div className="spicy">
        <i className="icon hotjar"></i>
      </div>
    ) : (
      ''
    );
  const renderVegan = () =>
    vegan ? (
      <div className="vegans">
        <i className="icon leaf"></i>
      </div>
    ) : (
      ''
    );

  const renderPersons = () => {
    switch (size[selectedSize]) {
      case 23:
        return '1';
      case 30:
        return '1-2';
      case 35:
        return '2';
      case 40:
        return '2-3';
      default:
        return '1';
    }
  };

  const renderCrust = () => {
    return crust.map((el, idx) => {
      return (
        <div
          onClick={() => setSelectedCrust(idx)}
          key={idx + title + 'crust'}
          className={`ui button ${selectedCrust === idx ? 'active' : ''}`}>
          {el}
        </div>
      );
    });
  };

  const renderRadius = () => {
    return size.map((el, idx) => {
      return (
        <div
          onClick={() => setSelectedSize(idx)}
          key={idx + title + 'size'}
          className={`ui button ${selectedSize === idx ? 'active' : ''}`}>
          {el} cm
        </div>
      );
    });
  };

  const renderPrice = () => {
    return price[selectedSize];
  };

  const renderIngredients = () => {
    return selectedIngredients.map((ing, idx) => {
      return (
        <div
          onClick={() => toggleIngredient(idx)}
          key={idx + title + 'ingredient'}>
          <PizzaCardIngredient ing={ing} />
        </div>
      );
    });
  };

  return (
    <div className="pizza-card">
      <div
        className="ingredients-hover"
        style={{
          zIndex: `${showIngredients ? 10 : -10}`,
          opacity: `${showIngredients ? 1 : 0}`,
        }}>
        <div
          className="ingredients-hover-close"
          onClick={() => {
            setShowIngredients(false);
          }}></div>
        <div className="ingredients-content">
          <div className="ingredients-content-container">
            <p>REMOVE INGREDIENTS</p>
            {renderIngredients()}
            {/* <div className="add-new-ingredient">
              <i className="plus circle icon"></i>
              Add ingredients
            </div> */}
            <div className="ingredients-content-container-bottom">
              <div
                className="cancel-btn"
                onClick={() => {
                  setShowIngredients(false);
                }}>
                cancel
              </div>
              <div
                className="ui button green"
                onClick={() => handleAddToCart()}>
                ADD TO CART
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pizza-img" style={bgStyle}>
        {renderHit()}
        {renderNew()}
        <div
          className="ingredients-button"
          onClick={() => {
            setShowIngredients(true);
          }}>
          <i className="ellipsis horizontal icon"></i>
        </div>
      </div>
      <div className="content">
        <div className="title">{title}</div>
        <div className="pizza-icons">
          {renderSpicy()}
          {renderVegan()}
          <div className="persons">
            {renderPersons()}
            <WithPopup popupText="Number of persons">
              <i className="icon user "></i>
            </WithPopup>
          </div>
        </div>
        <div className="pizza-description">{description}</div>

        <div className="pizza-crust">
          <div className="two ui buttons">{renderCrust()}</div>
        </div>

        <div className="pizza-radius">{renderRadius()}</div>

        <div className="card-footer">
          <div onClick={() => handleAddToCart()} className="ui button green">
            ADD TO CART
          </div>
          <div className="card-price">
            {renderPrice()}
            <i className={`${currency} sign icon`}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency.activeCurrency,
});

export default connect(mapStateToProps, { addPizzaToCart })(PizzaCard);
