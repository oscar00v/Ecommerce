import { createContext, useEffect, useState } from 'react';

const ItemContext = createContext();

function ItemProvider({ children }) {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isHomePage, setIsHomePage] = useState(true);  // Estado para saber si estamos en Home

  const URL_Items = 'https://ecommerce-json-jwt.onrender.com/items';

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch(URL_Items);
        if (!response.ok) {
          throw new Error("Error fetching items");
        }
        const data = await response.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  // Filtrar los productos si estamos en la Home (por el searchQuery)
  const filteredItems = isHomePage 
    ? items?.filter(item => 
        item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : items;  // Si no estamos en Home, mostramos todos los productos (sin filtro)

  // Agrupar productos por categoría solo si estamos en la página de Departamentos
  const categories = items?.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  const value = {
    items: filteredItems,  // Productos filtrados o todos dependiendo de la vista
    loading,
    error,
    setSearchQuery,
    setIsHomePage,  // Función para cambiar el estado de Home
    categories,  // Solo usaremos este valor en Departamentos
  };

  return (
    <ItemContext.Provider value={value}>
      {children}
    </ItemContext.Provider>
  );
}

export { ItemProvider, ItemContext };

// //!
// import { createContext, useEffect, useState } from 'react';
// //todo 1. Crear el contexto
// const ItemContext = createContext();


// //todo 2. Crear el proveedor del contexto
// function ItemProvider({ children }) {
//   const [items, setItems] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const URL_Items = 'https://ecommerce-json-jwt.onrender.com/items';

//   useEffect(() => {
//     async function fetchItems() {
//       try {
//         const response = await fetch(URL_Items);
//         if (!response.ok) {
//           throw new Error("Error fetching items");
//         }
//         const data = await response.json();
//         setItems(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchItems();
//   }, []);

//   const value = {
//     items,
//     loading,
//     error,
//   };

//   return (
//     <ItemContext.Provider value={value}>
//       {children}
//     </ItemContext.Provider>
//   )
// }

// export { ItemProvider, ItemContext };



// //!

















// import { createContext, useContext, useState, useEffect } from 'react';

// const ItemsContext = createContext(); // Crear el contexto

// const URL_Items = 'https://ecommerce-json-jwt.onrender.com/items';

// function ItemsProvider({ children }) {
//   const [items, setItems] = useState(null);

//   async function fetchItems() {
//     try {
//       const response = await fetch(URL_Items);
//       if (!response.ok) {
//         throw new Error("Error fetching items");
//       }
//       const data = await response.json();
//       console.log("Items desde el contexto:", data);
//       setItems(data); // Actualiza el estado con los ítems
//     } catch (error) {
//       console.error("Error fetching items:", error.message);
//     }
//   }

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   // Proveer los datos y funciones a los hijos
//   return (
//     <ItemsContext.Provider value={{ items }}>
//       {children}
//     </ItemsContext.Provider>
//   );
// }

// // Hook para usar el contexto
// function useItems() {
//     return useContext(ItemsContext);
//   }
  
//   export { ItemsProvider, useItems };