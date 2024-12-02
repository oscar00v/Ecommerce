import React from 'react'
import { ItemContext, ItemProvider } from '../context/ItemsContext.jsx';
import { useContext } from 'react';

function ItemList() {
    const { items, loading, error } = useContext(ItemContext);

    if (loading) {
        return <div>Cargando ítems...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Lista de Ítems</h1>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h2>{item.product_name}</h2>
                        <p>{item.description}</p>
                        <p>Precio: ${item.price}</p>
                        <p>Categoría: {item.category}</p>
                        <p>Marca: {item.brand}</p>
                        <img
                            src={item.image}
                            alt={item.product_name}
                            style={{ width: "150px", height: "150px" }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

function Home() {
    return (
        <div>
            <ItemProvider>
                <ItemList />
            </ItemProvider>
        </div>
    )
}

export default Home
