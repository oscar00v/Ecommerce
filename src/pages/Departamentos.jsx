import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemsContext'; // Asegúrate de ajustar la ruta según tu estructura
import './Departamento.scss'

function Departamentos() {
  const { items, loading, error } = useContext(ItemContext);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!items) return <p>No hay productos disponibles.</p>;

  // Agrupar productos por categoría
  const categories = items.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  return (
    <div className="departments-container">
      <h1>Departamentos</h1>
      <div className="categories-grid">
        {Object.keys(categories).map((category) => (
          <div className="category-card" key={category}>
            <h2>{category}</h2>
            {/* Mostramos el primer producto de cada categoría */}
            {categories[category][0] && (
              <img
                src={categories[category][0].image} // Cambia "image" si el campo se llama diferente
                alt={categories[category][0].name}
                className="category-image"
              />
            )}
            <button className="shop-button">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departamentos;
