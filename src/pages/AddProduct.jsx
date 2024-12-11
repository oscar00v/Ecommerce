import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProductService } from '../service/productService';
import { useAuthContext } from '../hooks/useAuth';
import './AddProduct.scss';

const AddProduct = () => {
  const { role } = useAuthContext();
  const navigate = useNavigate();

  if (role !== 'ADMIN') {
    navigate('/dashboard');
    return null;
  }

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    price: 0,
    stock: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProductService(formData);
      alert('Producto agregado correctamente');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al agregar el producto:', error);
      alert('No se pudo agregar el producto');
    }
  };

  return (
    <div>
      <h1>Agregar Producto</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre: <input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
        <label>Descripción: <textarea name="description" value={formData.description} onChange={handleChange} required /></label>
        <label>Categoría: 
          <select name="category" value={formData.category} onChange={handleChange} required>
            <option value="">Selecciona una categoría</option>
            {[
              'Books', 'Movies', 'Music', 'Games', 'Electronics', 'Computers', 'Home', 'Garden',
              'Tools', 'Grocery', 'Health', 'Beauty', 'Toys', 'Kids', 'Baby', 'Clothing', 'Shoes',
              'Jewelery', 'Sports', 'Outdoors', 'Automotive', 'Industrial',
            ].map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </label>
        <label>Precio: <input type="number" name="price" value={formData.price} onChange={handleChange} required /></label>
        <label>Stock: <input type="number" name="stock" value={formData.stock} onChange={handleChange} required /></label>
        <button type="submit">Agregar Producto</button>
      </form>
    </div>
  );
};

export default AddProduct;
