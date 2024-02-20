import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

import Header from './Header';
import Table from './Table';
import Add from './Add';
import Edit from './Edit';

import { ProductData } from '../../data';

const Dashboard = ({ setIsAuthenticated }) => {
  const [products, setProducts] = useState(ProductData);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('product_data'));
    if (data !== null && Object.keys(data).length !== 0) setProducts(data);
  }, []);

  const handleEdit = id => {
    const [product] = products.filter(product => product.id === id);
    setSelectedProduct(product);
    setIsEditing(true);
  };

  const handleDelete = id => {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then(result => {
      if (result.value) {
        const [product] = products.filter(employee => employee.id === id);

        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${product.name} 's data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const productCopy = products.filter(product => product.id !== id);
        localStorage.setItem('products_data', JSON.stringify(productCopy));
        setProducts(productCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            products={products}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          products={products}
          setProducts={setProducts}
          setIsAdding={setIsAdding}
        />
      )}
      {isEditing && (
        <Edit
          products={products}
          selectedProduct={selectedProduct}
          setProducts={setProducts}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
};

export default Dashboard;
