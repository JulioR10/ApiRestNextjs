import axios from "axios";
import { useEffect, useState } from "react";

//COMPONENTE DE PRUEBA
function MyComponent() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {items.map((item: any) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default MyComponent;
