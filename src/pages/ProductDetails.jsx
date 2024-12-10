import React from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ItemContext } from '../context/ItemsContext.jsx';
import './ProductDetail.scss';

function ProductDetail() {
    const { id } = useParams(); // Obtener el ID del producto desde la URL
    const { items } = useContext(ItemContext); // Obtener los ítems del contexto
    const product = items.find((item) => item.id === id); // Buscar el producto correspondiente

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
            <button>Comprar</button>
        </div>
    );
}

export default ProductDetail;
