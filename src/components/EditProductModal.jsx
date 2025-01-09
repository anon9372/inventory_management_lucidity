import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Capsule from '../container/Capsule';
import { setProducts } from '../store/actions/inventoryActions';

const EditProductModal = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products); // Get the current products from the store

  const [formData, setFormData] = useState({
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    quantity: product.quantity,
    value: product.value,
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => {
    const updatedProducts = products?.map((p) =>
      p.id === formData.id ? formData : p
    );
    dispatch(setProducts([updatedProducts])); 
    onClose();
  };

  return (
    <section className="modal" style={{ width: 'fit-content', padding: '5px 30px 20px 30px' }}>
      <div className="modal-header">
        <div>
          <h1>Edit Product</h1>
          <h4 className="modal-header-product-name">{product.name}</h4>
        </div>
        <Capsule>
          <FontAwesomeIcon icon={faX} onClick={onClose} style={{ cursor: 'pointer' }} />
        </Capsule>
      </div>

      <div className="modal-body" style={{ marginTop: '20px' }}>
        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
          <div>
            <label>Category</label>
            <br />
            <input
              className="modal-input"
              type="text"
              id="category"
              value={formData.category}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Price</label>
            <br />
            <input
              className="modal-input"
              type="text"
              id="price"
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div>
            <label>Quantity</label>
            <br />
            <input
              className="modal-input"
              type="text"
              id="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label>Value</label>
            <br />
            <input
              className="modal-input"
              type="text"
              id="value"
              value={formData.value}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>

      <div className="modal-footer" style={{ marginTop: '20px' }}>
        <button
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          style={{
            width: 'fit-content',
            padding: '5px',
            background: '#161718',
            color: '#7B8845',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </section>
  );
};

export default EditProductModal;
