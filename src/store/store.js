// src/store/index.js
import { createStore } from 'redux';
import inventoryReducer from './reducers/inventoryReducer';

// Create the store
const store = createStore(inventoryReducer);

export default store;
