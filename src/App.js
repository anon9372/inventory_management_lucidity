import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/actions/inventoryActions';
import axios from 'axios';
import './App.css';

import ProductTable from './components/ProductTable';
import Navbar from './components/Navbar';
import DashboardWidget from './components/DashboardWidget';
import Container from './container/Container';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';


const App = () => {
  const dispatch = useDispatch();
  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');

        const productsWithIds = response.data.map((product, index) => ({
          ...product,
          id: index,
        }));

        const totalProducts = productsWithIds.length;
        const totalValue = productsWithIds.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        const outOfStock = productsWithIds.filter((product) => product.quantity === 0).length;
        const uniqueCategories = new Set(productsWithIds.map((product) => product.category)).size;

        const metricsArray = [
          { title: 'Total Products', value: totalProducts, icon: faCartShopping  },
          { title: 'Total Value', value: `$${totalValue.toFixed(2)}`, icon: faDollarSign },
          { title: 'Out of Stock', value: outOfStock, icon: faX },
          { title: 'Total Categories', value: uniqueCategories, icon: faList },
        ];

        setMetrics(metricsArray);
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
        <div className='dashboard-widget-container'>
          {metrics.map((metric, index) => (
            <DashboardWidget key={index} title={metric.title} value={metric.value} icon={metric.icon} />
          ))}
        </div>
        <ProductTable />
      </Container>
    </div>
  );
};

export default App;
