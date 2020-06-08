import * as TYPES from '../actions/types';

// state = {
// total: 13.79,
// {[
//   title: 'Supreme',
//   crust: 'Traditional crust',
//   size: '23cm',
//   quantity: 1,
//   extraIngredients: ['cheese', 'olive oil'],
//   removedIngredients: ['Garlic'],
//   price: 13.79
//   noChanges: true
// ]}
// }

const INITIAL_STATE = {
  total: null,
  pizzaArray: [],
};

// Total convert
const convertTotal = (total) => {
  return Math.round(total * 100) / 100;
};

const findPizzaIndex = (pizzaArray, id) => {
  return pizzaArray.findIndex((el) => el.id === id);
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_PIZZA_TO_CART:
      return {
        ...state,
        total: convertTotal(state.total + action.payload.price),
        pizzaArray: [...state.pizzaArray, action.payload],
      };
    case TYPES.INCREACE_PIZZA_QUANTITY:
      let index = findPizzaIndex(state.pizzaArray, action.payload);
      return {
        ...state,
        total: convertTotal(state.total + state.pizzaArray[index].price),
        pizzaArray: [
          ...state.pizzaArray.filter((el) => el.id !== action.payload),
          {
            ...state.pizzaArray[index],
            quantity: state.pizzaArray[index].quantity + 1,
          },
        ],
      };
    case TYPES.DECREASE_PIZZA_QUANTITY:
      index = findPizzaIndex(state.pizzaArray, action.payload);

      if (state.pizzaArray[index].quantity === 1) {
        console.log(' quantity 1');
      }

      return {
        ...state,
        total: convertTotal(state.total + state.pizzaArray[index].price),
        pizzaArray: [
          ...state.pizzaArray.filter((el) => el.id !== action.payload),
          {
            ...state.pizzaArray[index],
            quantity: state.pizzaArray[index].quantity + 1,
          },
        ],
      };

    default:
      return state;
  }
};
