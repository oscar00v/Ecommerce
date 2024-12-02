// import React from 'react';
// import { ItemsProvider } from './context/ItemsContext';


// function App2() {
//   return (
//     <ItemsProvider>
//       <div>
//         <h1>Hola mundo</h1>
//         <ItemList />
//       </div>
//     </ItemsProvider>
//   );
// }

// function ItemList() {
//   const { items } = useItems();

//   return (
//     <div>
//       <h2>Ítems</h2>
//       {items ? (
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>{item.name}</li> // Asume que cada ítem tiene un "id" y "name"
//           ))}
//         </ul>
//       ) : (
//         <p>Cargando ítems...</p>
//       )}
//     </div>
//   );
// }

// export default App2;
