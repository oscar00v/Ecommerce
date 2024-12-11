import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ItemContext } from '../context/ItemsContext.jsx';
import { CartContext } from '../context/CartContext'; // Importar el contexto del carrito
import './ProductDetail.scss';

function ProductDetail() {
  const { id } = useParams();
  const { items, loading, error } = useContext(ItemContext);
  const { addToCart } = useContext(CartContext); // Obtener la función para agregar al carrito

  // Mostrar mensaje de carga o error
  if (loading) return <div>Cargando productos...</div>;
  if (error) return <div>Error al cargar productos: {error}</div>;

  // Encontrar el producto por ID
  const product = items.find((item) => item.id === id);

  // Si no se encuentra el producto
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.product_name} />
      <h1>{product.product_name}</h1>
      <p>{product.description}</p>
      <p className="price">Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>Marca: {product.brand}</p>
      <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
    </div>
  );
}

export default ProductDetail;


// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useContext } from 'react';
// import { ItemContext } from '../context/ItemsContext.jsx';
// import './ProductDetail.scss';

// function ProductDetail() {
//     const { id } = useParams(); // Obtener el ID del producto desde la URL
//     const { items } = useContext(ItemContext); // Obtener los ítems del contexto
//     const product = items.find((item) => item.id === id); // Buscar el producto correspondiente

//     if (!product) {
//         return <div>Producto no encontrado</div>;
//     }

//     return (
//         <div className="product-detail">
//             <img src={product.image} alt={product.product_name} />
//             <h1>{product.product_name}</h1>
//             <p>{product.description}</p>
//             <p className="price">Precio: ${product.price}</p>
//             <p>Categoría: {product.category}</p>
//             <p>Marca: {product.brand}</p>
//             <button>Comprar</button>
//         </div>
//     );
// }

// export default ProductDetail;
