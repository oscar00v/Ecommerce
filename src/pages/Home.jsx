import React from 'react';
import { ItemContext, ItemProvider } from '../context/ItemsContext.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { useEffect } from 'react';
function Home() {
    const { items, loading, error, setIsHomePage } = useContext(ItemContext);
  
    // Asegúrate de que solo se filtre cuando estamos en Home
    useEffect(() => {
      setIsHomePage(true);
    }, [setIsHomePage]);
  
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
  
  export default Home;


// //!
// function ItemList() {
//     const { items, loading, error } = useContext(ItemContext);

//     if (loading) {
//         return <div>Cargando ítems...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="home">
//             <h1 className="home__title">Tienda de Ítems</h1>
//             <div className="home__grid">
//                 {items.map((item) => (
//                     <div className="home__card" key={item.id}>
//                         <img
//                             src={item.image}
//                             alt={item.product_name}
//                         />
//                         <h2>{item.product_name}</h2>
//                         <p className="price">Precio: ${item.price}</p>
//                         <Link to={`/product/${item.id}`}>
//                             <button>Ver Detalles</button>
//                         </Link>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function Home() {
//     return (
//         <div>
//             <ItemProvider>
//                 <ItemList />
//             </ItemProvider>
//         </div>
//     );
// }

// export default Home;


// //!

// import React from 'react';
// import { ItemContext, ItemProvider } from '../context/ItemsContext.jsx';
// import { useContext } from 'react';
// import './Home.scss';

// function ItemList() {
//     const { items, loading, error } = useContext(ItemContext);

//     if (loading) {
//         return <div>Cargando ítems...</div>;
//     }

//     if (error) {
//         return <div>Error: {error}</div>;
//     }

//     return (
//         <div className="home">
//             <h1 className="home__title">Tienda de Ítems</h1>
//             <div className="home__grid">
//                 {items.map((item) => (
//                     <div className="home__card" key={item.id}>
//                         <img
//                             src={item.image}
//                             alt={item.product_name}
//                         />
//                         <h2>{item.product_name}</h2>
//                         {/* <p>{item.description}</p> */}
//                         <p className="price">Precio: ${item.price}</p>
//                         {/* <p>Categoría: {item.category}</p> */}
//                         {/* <p>Marca: {item.brand}</p> */}
//                         <button>Click</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// function Home() {
//     return (
//         <div>
//             <ItemProvider>
//                 <ItemList />
//             </ItemProvider>
//         </div>
//     );
// }

// export default Home;



{/* <div className="home__card" key={item.id}>
<img
    src={item.image}
    alt={item.product_name}
/>
<h2>{item.product_name}</h2>
<p>{item.description}</p>
<p className="price">Precio: ${item.price}</p>
<p>Categoría: {item.category}</p>
<p>Marca: {item.brand}</p>
<button>Click</button>
</div> */}