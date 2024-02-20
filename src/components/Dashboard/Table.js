import React from 'react';

const Table = ({ products, handleEdit, handleDelete }) => {
  products.forEach((product, i) => {
    product.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  return (
    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>brand</th>
            <th>weight</th>
            <th>dimensions</th>
            {/* <th>img</th> */}
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, i) => (
              <tr key={product.id}>
                <td>{i + 1}</td>
                <td>{product.name}</td>
                <td>{product.desc}</td>
                <td>{product.category}</td>
                <td>₹ {product.price} </td>
                <td>{product.brand}</td>
                <td>{product.weight} gram</td>
                <td>{product.dimensions}</td>
                {/* <td>{product.img}</td> */}
                
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Product</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
