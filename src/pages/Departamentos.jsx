import { useContext, useState } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Link } from 'react-router-dom'; // Importa Link
import './Departamento.scss';

function Departamentos() {
  const { categories, loading, error, items } = useContext(ItemContext);
  const [selectedCategory, setSelectedCategory] = useState(null);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!categories) return <p>No hay productos disponibles.</p>;

  // Filtrar productos de la categoría seleccionada
  const filteredItems = selectedCategory
    ? items.filter(item => item.category === selectedCategory)
    : null;

  const handleSeeMore = (category) => {
    setSelectedCategory(category);
  };

  const handleBackToDepartments = () => {
    setSelectedCategory(null); // Vuelve a mostrar las categorías
  };

  return (
    <div className="departments-container">
      <h1>Departamentos</h1>

      {/* Mostrar las categorías o los productos filtrados */}
      {selectedCategory ? (
        // Mostrar los productos de la categoría seleccionada
        <div>
          <button className="back-button" onClick={handleBackToDepartments}>
            Volver a Departamentos
          </button>
          <div className="home__grid">
            {filteredItems.map((item) => (
              <div className="home__card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.product_name}
                  className="category-image"
                />
                <h2>{item.product_name}</h2>
                <p className="price">Precio: ${item.price}</p>
                {/* Botón "Ver Detalles" con navegación */}
                <Link to={`/product/${item.id}`}>
                  <button>Ver Detalles</button>
                </Link>
              </div>//!
            ))}
          </div>
        </div>
      ) : (
        // Mostrar solo el primer producto de cada categoría
        <div className="categories-grid">
          {Object.keys(categories).map((category) => (
            <div className="category-card" key={category}>
              <h2>{category}</h2>
              {/* Mostramos el primer producto de cada categoría */}
              {categories[category][0] && (
                <img
                  src={categories[category][0].image}
                  alt={categories[category][0].product_name}
                  className="category-image"
                />
              )}
              <button
                className="shop-button"
                onClick={() => handleSeeMore(category)} // Actualiza la categoría seleccionada
              >
                More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Departamentos;


//? import { useContext } from 'react';
// import { ItemContext } from '../context/ItemsContext';
// import './Departamento.scss'

// function Departamentos() {
//   const { categories, loading, error } = useContext(ItemContext);

//   if (loading) return <p>Cargando productos...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!categories) return <p>No hay productos disponibles.</p>;

//   return (
//     <div className="departments-container">
//       <h1>Departamentos</h1>
//       <div className="categories-grid">
//         {Object.keys(categories).map((category) => (
//           <div className="category-card" key={category}>
//             <h2>{category}</h2>
//             {/* Mostramos el primer producto de cada categoría */}
//             {categories[category][0] && (
//               <img
//                 src={categories[category][0].image} // Cambia "image" si el campo se llama diferente
//                 alt={categories[category][0].product_name}
//                 className="category-image"
//               />
//             )}
//             <button className="shop-button">See More</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Departamentos;


//! import React, { useContext } from 'react';
// import { ItemContext } from '../context/ItemsContext'; // Asegúrate de ajustar la ruta según tu estructura
// import './Departamento.scss'

// function Departamentos() {
//   const { items, loading, error } = useContext(ItemContext);

//   if (loading) return <p>Cargando productos...</p>;
//   if (error) return <p>Error: {error}</p>;
//   if (!items) return <p>No hay productos disponibles.</p>;

//   // Agrupar productos por categoría
//   const categories = items.reduce((acc, item) => {
//     const { category } = item;
//     if (!acc[category]) acc[category] = [];
//     acc[category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="departments-container">
//       <h1>Departamentos</h1>
//       <div className="categories-grid">
//         {Object.keys(categories).map((category) => (
//           <div className="category-card" key={category}>
//             <h2>{category}</h2>
//             {/* Mostramos el primer producto de cada categoría */}
//             {categories[category][0] && (
//               <img
//                 src={categories[category][0].image} // Cambia "image" si el campo se llama diferente
//                 alt={categories[category][0].name}
//                 className="category-image"
//               />
//             )}
//             <button className="shop-button">Shop Now</button>
//           </div>//falta implementar un filto o que nos lleve a una pagina con todos los productos de la misma categoria
          
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Departamentos;
