// src/store/actions/inventoryActions.js
export const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  export const updateProduct = (product) => ({
    type: 'UPDATE_PRODUCT',
    payload: product,
  });
  
  export const deleteProduct = (productId) => ({
    type: 'DELETE_PRODUCT',
    payload: productId,
  });
  
  export const disableProduct = (productId) => ({
    type: 'DISABLE_PRODUCT',
    payload: productId,
  });
