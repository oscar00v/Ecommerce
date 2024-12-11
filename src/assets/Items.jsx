import { useContext } from 'react';
import { ItemContext } from '../context/ItemsContext';
import { Link } from 'react-router-dom';
import './Home.scss';

function Items() {
  const { items, loading, error } = useContext(ItemContext);

  if (loading) {
    return <div>Cargando ítems...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="home">
      <h1 className="home__title">Tienda de Ítems</h1>
      <div className="home__grid">
        {items.length === 0 ? (
          <p>No se encontraron productos.</p>
        ) : (
          items.map((item) => (
            <div className="home__card" key={item.id}>
              <img src={item.image} alt={item.product_name} />
              <h2>{item.product_name}</h2>
              <p className="price">Precio: ${item.price}</p>
              <Link to={`/product/${item.id}`}>
                <button>Ver Detalles</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Items;


//!
// import { useEffect, useState } from 'react';

// const URL_Items = 'https://ecommerce-json-jwt.onrender.com/items';

// function Items() {
//   const [items, setItems] = useState(null);

//   async function fetchItems() {
//     try {
//       const response = await fetch(URL_Items);
//       if (!response.ok) {
//         throw new Error("Error fetching items");
//       }
//       const data = await response.json();
//       console.log("Items:", data);
//       setItems(data); // Actualiza el estado con los ítems
//     } catch (error) {
//       console.error("Error fetching items:", error.message);
//     }
//   }

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   return items; // Retorna los ítems
// }

// export default Items;
//!