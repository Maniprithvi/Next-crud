import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Edit = ({ products, selectedProduct, setproducts, setIsEditing }) => {
  const id = selectedProduct.id;

  
  const [name, setName] = useState(selectedProduct.name);
  const [desc,setDesc] = useState(selectedProduct.desc);
  const [price, setPrice] = useState(selectedProduct.price);
  const [quantity, setQuantity] = useState(selectedProduct.quantity);
  const [category, setCategory] = useState(selectedProduct.category);
  const [brand, setBrand] = useState(selectedProduct.brand);
  const [weight,setWeight]= useState(selectedProduct.weight);
  const [dimensions,setDimentions]= useState(selectedProduct.dimensions)
  const handleUpdate = e => {
    e.preventDefault();

    if (!name || !price || !desc || !quantity || !category || !weight || ! brand || !dimensions) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const product = {
      id,
      name,
      price,
      category,
      desc,
      dimensions,
      quantity,
      brand
    };

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1, product);
        break;
      }
    }

    localStorage.setItem('products_data', JSON.stringify(product));
    // setproducts(products);
    setIsEditing(false);

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${product.name} 's data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Employee</h1>
        <label htmlFor="name">name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <label htmlFor="desc">description</label>
        <input
          id="desc"
          type="text"
          name="desc"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />
        <label htmlFor="price">Price ($)</label>
        <input
          id="price"
          type="number"
          name="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <label htmlFor="">quantity </label>
        <input
          id="quantity"
          type="number"
          name="quantity"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        <label htmlFor="brand">brand </label>
        <input
          id="brand"
          type="text"
          name="brand"
          value={brand}
          onChange={e => setBrand(e.target.value)}
        />
        <label htmlFor="Category">Category </label>
        <select id="category" name="category">
        <option value={category}   onClick={e => setCategory(e.target.value)} >mens</option>
        <option value={category}   onClick={e => setCategory(e.target.value)} >kids</option>
        <option value={category}   onClick={e => setCategory(e.target.value)} >womens</option>
        </select>

        <label htmlFor="weight">weight </label>
        <input
          id="weight"
          type="number"
          name="weight"
          value={weight}
          onChange={e => setWeight(e.target.value)}
        />
        <label htmlFor="weight">Dimensions </label>
        <input
          id="dimensions"
          type="number"
          name="dimensions"
          value={dimensions}
          onChange={e => setDimentions(e.target.value)}
        />
        <div style={{ marginTop: '30px' }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
