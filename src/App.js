import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from './store/actions/inventoryActions';
import axios from 'axios';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
      console.log('res', response)
      dispatch(setProducts(response.data));
    };

    fetchData();
  }, [dispatch]);

  return <div>App Content</div>;
};

export default App;
