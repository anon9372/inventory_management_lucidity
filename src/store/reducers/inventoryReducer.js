const initialState = {
  userRole: 'user',
  products: [],
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products:  action.payload,
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products[0].filter((product) => product.id !== action.payload),
      };
    case 'TOGGLE_USER_ROLE':
      return {
        ...state,
        userRole: state.userRole === 'admin' ? 'user' : 'admin',
      };
    default:
      return state;
  }
};

export default inventoryReducer;
