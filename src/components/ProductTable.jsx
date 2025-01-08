import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct } from './store/actions/inventoryActions';

const ProductTable = () => {
  const products = useSelector((state) => state.inventory.products);
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <table>
      {products.map((product) => (
        <tr key={product.id}>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </td>
        </tr>
      ))}
    </table>
  );
};

export default ProductTable;
