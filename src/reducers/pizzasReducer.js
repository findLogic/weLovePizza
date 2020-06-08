import * as TYPES from '../actions/types';

// state = [
//   array of pizzas objects
// ]

// Conver price with currency
const convertPrice = (priceArr, currencyValue) => {
  return priceArr.map((price) =>
    (Math.floor(price * currencyValue) / 100).toFixed(2),
  );
};

export default (state = [], action) => {
  switch (action.type) {
    case TYPES.FETCH_PIZZAS:
      return [
        ...action.payload.data.map((el) => ({
          id: el.id,
          name: el.name,
          properties: {
            ...JSON.parse(el.properties),
            initPrice: [...JSON.parse(el.properties).price],
            price: convertPrice(
              JSON.parse(el.properties).price,
              action.payload.currencyValue,
            ),
          },
        })),
      ];
    case TYPES.CHANGE_CURRENCY:
      return [
        ...state.map((el) => ({
          ...el,
          properties: {
            ...el.properties,
            price: convertPrice(
              el.properties.initPrice,
              action.payload.currencyValue,
            ),
          },
        })),
      ];
    default:
      return state;
  }
};
