import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, setMetrics } from '../store/actions/inventoryActions';

import Capsule from '../container/Capsule';
import EditProductModal from '../components/EditProductModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

import getProductMetrics from '../helpers/helper'

const ProductTable = () => {

  const products = useSelector((state) => {
    return Array.isArray(state.products[0]) ? state.products[0] : state.products;
  });
  const userStatus = useSelector((state) => state.userRole);
  const [hiddenRows, setHiddenRows] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleView = (id) => {
    setHiddenRows((prevState) =>
      prevState.includes(id)
        ? prevState.filter((hiddenId) => hiddenId !== id)
        : [...prevState, id]
    );
  };

  const handleDeleteProduct = (id, productsWithIds) => {
    let metricsArray = getProductMetrics(productsWithIds)
    dispatch(setMetrics(metricsArray))
    dispatch(deleteProduct(id));
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };


  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <Capsule>Name</Capsule>
            </th>
            <th>
              <Capsule>Category</Capsule>
            </th>
            <th>
              <Capsule>Price</Capsule>
            </th>
            <th>
              <Capsule>Quantity</Capsule>
            </th>
            <th>
              <Capsule>Value</Capsule>
            </th>
            <th>
              <Capsule>Actions</Capsule>
            </th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 &&
            products?.map((product) => (
              <tr key={product.id}>
                <td>{hiddenRows.includes(product.id) ? '****' : product.name}</td>
                <td>{hiddenRows.includes(product.id) ? '****' : product.category}</td>
                <td>{hiddenRows.includes(product.id) ? '****' : product.price}</td>
                <td>{hiddenRows.includes(product.id) ? '****' : product.quantity}</td>
                <td>{hiddenRows.includes(product.id) ? '****' : product.value}</td>
                <td>
                  <FontAwesomeIcon
                    style={{
                      marginRight: '10px',
                      cursor: userStatus === 'admin' ? 'pointer' : 'not-allowed',
                      opacity: userStatus === 'admin' ? 1 : 0.5,
                      color: 'green',
                    }}
                    icon={faPen}
                    onClick={() => userStatus === 'admin' && handleEditProduct(product)}
                  />
                  <FontAwesomeIcon
                    style={{
                      marginRight: '10px',
                      cursor: userStatus === 'admin' ? 'pointer' : 'not-allowed',
                      opacity: userStatus === 'admin' ? 1 : 0.5,
                      color: 'purple',
                    }}
                    icon={faEye}
                    onClick={() => userStatus === 'admin' && handleView(product.id)}
                  />
                  <FontAwesomeIcon
                    style={{
                      marginRight: '10px',
                      cursor: userStatus === 'admin' ? 'pointer' : 'not-allowed',
                      opacity: userStatus === 'admin' ? 1 : 0.5,
                      color: 'red',
                    }}
                    icon={faDeleteLeft}
                    onClick={() => userStatus === 'admin' && handleDeleteProduct(product.id, products)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div> {/* Overlay */}
          <EditProductModal product={selectedProduct} onClose={closeModal} />
        </>
      )}
    </>
  );
};

export default ProductTable;
