import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Add = ({ products, setproducts, setIsAdding }) => {
  const [name, setName] = useState('');
  const [desc,setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [weight,setWeight]= useState('');
  const [dimensions,setDimentions]= useState('')
  // const [img,setImg] = useState('');

//   const handleAdd = (e) => {
//     e.preventDefault();
// // console.log(name,price,quantity,category,brand,weight,dimensions,desc)
//     if (!name || !price || !quantity || !category || !brand ||!weight  || !dimensions || !desc) {
//       return Swal.fire({
//         icon: 'error',
//         title: 'Error!',
//         text: 'All fields are required.',
//         showConfirmButton: true,
//       });
//     }

//     const id = products.length + 1;
//     const newProduct = {
//       id,
//       name,
//       price,
//       category,
//       desc,
//       dimensions,
//       quantity,
//       brand,
//       // img

//     };

//     products.push(newProduct);
//     localStorage.setItem('products_data', JSON.stringify(products));
//     // setproducts(products);
//     setIsAdding(false);

//     Swal.fire({
//       icon: 'success',
//       title: 'Added!',
//       text: `${name}'s data has been Added.`,
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };


const handleAdd = (e) => {
  e.preventDefault();

  if (!name || !price || !quantity || !category || !brand || !weight || !dimensions || !desc) {
    return Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'All fields are required.',
      showConfirmButton: true,
    });
  }

  const id = products.length + 1;
  const newProduct = {
    id,
    name,
    price,
    category,
    desc,
    weight,
    dimensions, // 
    quantity,
    brand,
  };

  products.push(newProduct);
  localStorage.setItem('products_data', JSON.stringify(products));
  // Uncomment the following line if you intend to update the state using setproducts
  // setproducts(products);
  setIsAdding(false);

  Swal.fire({
    icon: 'success',
    title: 'Added!',
    text: `${name}'s data has been Added.`,
    showConfirmButton: false,
    timer: 1500,
  });
};

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Product</h1>
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
         <select id="category" name="category" onChange={(e) => setCategory(e.target.value)}>
           <option value="mens">Mens</option>
           <option value="kids">Kids</option>
           <option value="womens">Womens</option>
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
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: '12px' }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
