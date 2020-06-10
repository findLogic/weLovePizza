import * as TYPES from '../actions/types';

// state = {
// total: 13.79,
// pizzaOrder: 0,
// {[
//   title: 'Supreme',
//   crust: 'Traditional crust',
//   size: '23cm',
//   quantity: 1,
//   extraIngredients: ['cheese', 'olive oil'],
//   removedIngredients: ['Garlic'],
//   price: 13.79
// ]}
// }

const INITIAL_STATE = {
  total: 0,
  pizzaArray: [],
  pizzaOrder: 0,
};

// Total count and convert
const convertTotal = (pizzaArray, currencyValue = 1) => {
  return (
    Math.round(
      pizzaArray
        .map((el) => el.initPrice * el.quantity * currencyValue)
        .reduce((acc, cur) => acc + cur, 0),
    ) / 100
  ).toFixed(2);
};

// add item to cart
const addItemToCart = (state, action) => {
  // Testing if there is same pizza in cart
  if (testSamePizza(state, action).test) {
    let testAction = testSamePizza(state, action);
    return increaseItemQuantity(state, testAction);
  }
  // Just add new pizza to cart
  const newPizzaArray = [
    ...state.pizzaArray,
    { ...action.payload.pizzaObj, order: state.pizzaOrder },
  ];
  return {
    ...state,
    total: convertTotal(newPizzaArray, action.payload.currencyValue),
    pizzaArray: newPizzaArray,
    pizzaOrder: state.pizzaOrder + 1,
  };
};

// Test on same pizza obj
// action.payload = {pizzaObj, currencyValue}
const testSamePizza = (state, action) => {
  const { pizzaArray } = state;
  const { pizzaObj, currencyValue } = action.payload;
  const currentPizza = pizzaArray.filter((el) => {
    return (
      el.title === pizzaObj.title &&
      el.crust === pizzaObj.crust &&
      el.size === pizzaObj.size &&
      JSON.stringify(el.extraIngredients) ===
        JSON.stringify(pizzaObj.extraIngredients) &&
      JSON.stringify(el.removedIngredients) ===
        JSON.stringify(pizzaObj.removedIngredients)
    );
  });
  if (currentPizza[0]) {
    return {
      test: true,
      payload: { id: currentPizza[0].id, currencyValue },
    };
  }
  return { test: false };
};

// Search current pizza obj with id in pizzaArray
const findPizzaIndex = (pizzaArray, id) => {
  return pizzaArray.findIndex((el) => el.id === id);
};

// Increase item quantity by 1
// action.payload = {id , currencyValue}
const increaseItemQuantity = (state, action) => {
  let index = findPizzaIndex(state.pizzaArray, action.payload.id);
  const newPizzaArray = [
    ...state.pizzaArray.filter((el) => el.id !== action.payload.id),
    {
      ...state.pizzaArray[index],
      quantity: state.pizzaArray[index].quantity + 1,
    },
  ];
  return {
    ...state,
    total: convertTotal(newPizzaArray, action.payload.currencyValue),
    pizzaArray: newPizzaArray,
  };
};

// Delete pizza from cart with any quantity
// action.payload = id
const deleteItemFromCart = (state, action) => {
  const newPizzaArray = state.pizzaArray.filter(
    (el) => el.id !== action.payload.id,
  );

  return {
    ...state,
    total: convertTotal(newPizzaArray, action.payload.activeCurrencyValue),
    pizzaArray: newPizzaArray,
  };
};

// Decrease pizza quantity by 1
const decreasePizzaQuantity = (state, action) => {
  const newPizzaArray = [
    ...state.pizzaArray.filter((el) => el.id !== action.payload.id),
    {
      ...state.pizzaArray[findPizzaIndex(state.pizzaArray, action.payload.id)],
      quantity:
        state.pizzaArray[findPizzaIndex(state.pizzaArray, action.payload.id)]
          .quantity - 1,
    },
  ];
  return {
    ...state,
    total: convertTotal(newPizzaArray, action.payload.currencyValue),
    pizzaArray: newPizzaArray,
  };
};

const changeCurrency = (state, action) => {
  return {
    ...state,
    total: convertTotal(state.pizzaArray, action.payload.currencyValue),
    pizzaArray: state.pizzaArray.map((el) => ({
      ...el,
      price: Math.round(
        (el.initPrice * action.payload.currencyValue) / 100,
      ).toFixed(2),
    })),
  };
};

// clear all cart items
const clearAllCartItems = (state, action) => {
  return {
    ...state,
    ...INITIAL_STATE,
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_ITEM_TO_CART:
      return addItemToCart(state, action);
    case TYPES.INCREACE_ITEM_QUANTITY:
      return increaseItemQuantity(state, action);
    case TYPES.DECREASE_ITEM_QUANTITY:
      return decreasePizzaQuantity(state, action);
    case TYPES.DELETE_ITEM_FROM_CART:
      return deleteItemFromCart(state, action);
    case TYPES.CLEAR_ALL_CART_ITEMS:
      return clearAllCartItems(state, action);
    case TYPES.CHANGE_CURRENCY:
      return changeCurrency(state, action);

    default:
      return state;
  }
};
