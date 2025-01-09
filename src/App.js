import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts, setMetrics } from './store/actions/inventoryActions';
import axios from 'axios';
import './App.css';

import ProductTable from './components/ProductTable';
import Navbar from './components/Navbar';
import DashboardWidget from './components/DashboardWidget';
import Container from './container/Container';

import getProductMetrics from './helpers/helper';


const App = () => {
  const dispatch = useDispatch();

  const products = useSelector((state) => {
    return Array.isArray(state.products[0]) ? state.products[0] : state.products;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');

        const productsWithIds = response.data.map((product, index) => ({
          ...product,
          id: index,
        }));

        let metricsArray = getProductMetrics(productsWithIds)
        console.log('metricsArray', metricsArray)
        dispatch(setMetrics(metricsArray))
        dispatch(setProducts(productsWithIds));
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Container>
        <h2>Inventory Stat</h2>
        <DashboardWidget />
        <ProductTable />
      </Container>
    </div>
  );
};

export default App;
