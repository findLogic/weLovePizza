import * as TYPES from '../actions/types';

// state = {
//   array of pizzas objects
// {
//   title: 'Supreme',
//   crust: 'Traditional crust',
//   size: '23cm',
//   quantity: 1,
//   extraIngredients: ['cheese', 'olive oil'],
//   removedIngredients: ['Garlic'],
//   price: 13.79
// }
// }

const INITIAL_STATE = {
  total: null,
  pizzaArray: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.ADD_PIZZA_TO_CART:
      console.log(state.pizzaArray);
      return {
        ...state,
        total: state.total + action.payload.price,
        pizzaArray: [...state.pizzaArray, action.payload],
      };
    default:
      return state;
  }
};
