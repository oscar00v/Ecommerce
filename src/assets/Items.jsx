import { useEffect, useState } from 'react';

const URL_Items = 'https://ecommerce-json-jwt.onrender.com/items';

function Items() {
  const [items, setItems] = useState(null);

  async function fetchItems() {
    try {
      const response = await fetch(URL_Items);
      if (!response.ok) {
        throw new Error("Error fetching items");
      }
      const data = await response.json();
      console.log("Items:", data);
      setItems(data); // Actualiza el estado con los ítems
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return items; // Retorna los ítems
}

export default Items;
