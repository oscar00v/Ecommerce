import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
// import {ItemProvider} from './context/ItemsContext.jsx'


function App() {
  const URL_Items = 'https://ecommerce-json-jwt.onrender.com/items';
  const URL_Users = 'https://ecommerce-json-jwt.onrender.com/users';
  
  const [items, setItems] = useState(null); // Estado para los ítems
  const [users, setUsers] = useState(null); // Estado para los usuarios

  // Función para obtener los ítems
  async function fetchItems() {
    try {
      const response = await fetch(URL_Items);
      if (!response.ok) {
        throw new Error("Error fetching items");
      }
      const data = await response.json();
      console.log("Items:", data);
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  }

  // Función para obtener los usuarios
  async function fetchUsers() {
    try {
      const response = await fetch(URL_Users);
      if (!response.ok) {
        throw new Error("Error fetching users");
      }
      const data = await response.json();
      console.log("Users:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error.message);
    }
  }

  // Llamar a las funciones cuando el componente se monta
  useEffect(() => {
    fetchItems();
    // fetchUsers();
  }, []);

  return (
    <div>
      Hola mundo
    </div>
  )
}

export default App
