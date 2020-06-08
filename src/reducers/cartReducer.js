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

// Total convert
const convertTotal = (total) => {
  return Math.floor(+total * 100) / 100;
};

// Test on same pizza obj
// action.payload = pizzaObj
const testSamePizza = (state, action) => {
  const { pizzaArray } = state;
  const { payload } = action;
  const currentPizza = pizzaArray.filter((el) => {
    return (
      el.title === payload.title &&
      el.crust === payload.crust &&
      el.size === payload.size &&
      JSON.stringify(el.extraIngredients) ===
        JSON.stringify(payload.extraIngredients) &&
      JSON.stringify(el.removedIngredients) ===
        JSON.stringify(payload.removedIngredients)
    );
  });
  if (currentPizza[0]) {
    return {
      test: true,
      payload: currentPizza[0].id,
    };
  }
  return { test: false };
};

// Search current pizza obj with id in pizzaArray
const findPizzaIndex = (pizzaArray, id) => {
  return pizzaArray.findIndex((el) => el.id === id);
};

// Increase item quantity by 1
// action.payload = id ///////////////////////
const increaseItemQuantity = (state, action) => {
  let index = findPizzaIndex(state.pizzaArray, action.payload);
  return {
    ...state,
    total: convertTotal(+state.total + +state.pizzaArray[index].price).toFixed(
      2,
    ),
    pizzaArray: [
      ...state.pizzaArray.filter((el) => el.id !== action.payload),
      {
        ...state.pizzaArray[index],
        quantity: state.pizzaArray[index].quantity + 1,
      },
    ],
  };
};

// Delete pizza from cart with any quantity
// action.payload = id
const deleteItemFromCart = (state, action) => {
  const newPizzaArray = state.pizzaArray.filter(
    (el) => el.id !== action.payload,
  );

  return {
    ...state,
    total: convertTotal(
      newPizzaArray.reduce(
        (acc, current) => +acc + +current.quantity * current.price,
        0,
      ),
    ).toFixed(2),
    pizzaArray: newPizzaArray,
  };
};

// Decrease pizza quantity by 1
const decreasePizzaQuantity = (state, action) => {
  return {
    ...state,
    total: convertTotal(
      +state.total -
        +state.pizzaArray[findPizzaIndex(state.pizzaArray, action.payload)]
          .price,
    ),
    pizzaArray: [
      ...state.pizzaArray.filter((el) => el.id !== action.payload),
      {
        ...state.pizzaArray[findPizzaIndex(state.pizzaArray, action.payload)],
        quantity:
          state.pizzaArray[findPizzaIndex(state.pizzaArray, action.payload)]
            .quantity - 1,
      },
    ],
  };
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_ITEM_TO_CART:
      // Testing if there is same pizza in cart
      if (testSamePizza(state, action).test) {
        let testAction = testSamePizza(state, action);
        return increaseItemQuantity(state, testAction);
      }
      // Just add new pizza to cart
      return {
        ...state,
        total: convertTotal(+state.total + +action.payload.price).toFixed(2),
        pizzaArray: [
          ...state.pizzaArray,
          { ...action.payload, order: state.pizzaOrder },
        ],
        pizzaOrder: state.pizzaOrder + 1,
      };
    case TYPES.INCREACE_ITEM_QUANTITY:
      return increaseItemQuantity(state, action);
    case TYPES.DECREASE_ITEM_QUANTITY:
      return decreasePizzaQuantity(state, action);
    case TYPES.DELETE_ITEM_FROM_CART:
      return deleteItemFromCart(state, action);
    case TYPES.CLEAR_ALL_CART_ITEMS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case TYPES.CHANGE_CURRENCY:
      return {
        ...state,
        total: convertTotal(
          state.pizzaArray.reduce(
            (acc, current) =>
              +acc +
              +current.initPrice *
                +action.payload.currencyValue *
                current.quantity,
            0,
          ) / 100,
        ).toFixed(2),
        pizzaArray: state.pizzaArray.map((el) => ({
          ...el,
          price: ((el.initPrice * action.payload.currencyValue) / 100).toFixed(
            2,
          ),
        })),
      };

    default:
      return state;
  }
};
