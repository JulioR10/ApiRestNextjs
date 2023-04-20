// import { useState, useEffect } from "react";
// import axios from "axios";
// import ItemList from "../components/ItemList";
// import ItemForm from "../components/ItemForm";

// export default function Home() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const fetchItems = async () => {
//     try {
//       const response = await axios.get("/api/items");
//       setItems(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addItem = async (item: any) => {
//     try {
//       const response = await axios.post("/api/items", item);
//       setItems([...items, response.data]);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const updateItem = async (id: any, updatedItem: any) => {
//     try {
//       await axios.put(`/api/items/${id}`, updatedItem);
//       fetchItems();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteItem = async (id: any) => {
//     try {
//       await axios.delete(`/api/items/${id}`);
//       setItems(items.filter((item) => item._id !== id));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <>
//       <div>
//         <h1>Lista de Items</h1>
//         <ItemList
//           items={items}
//           onUpdateItem={updateItem}
//           onDeleteItem={deleteItem}
//         />
//       </div>
//       <div>
//         <h1>Introduce Items</h1>
//         <ItemForm onAddItem={addItem} />
//       </div>
//     </>
//   );
// }

// import { useState, useEffect } from "react";
// import axios from "axios";
// import ItemList from "../components/ItemList";
// import ItemForm from "../components/ItemForm";

// export default function Home() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/items") //http://localhost:5000/items
//       .then((response) => {
//         setItems(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Introduce Items</h1>
//         <ItemForm />
//       </div>
//       <div>
//         <h1>Lista de Items</h1>
//         <ItemList items={items} />
//       </div>
//     </>
//   );
// }

// Asegúrate de importar ItemPage desde su ubicación correcta
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ItemPages from "./ItemPages";

// export default function Home() {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/items") //http://localhost:5000/items
//       .then((response) => {
//         setItems(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   return (
//     <>
//       <div>
//         <ItemPages items={items} />
//       </div>
//     </>
//   );
// }

import ItemPages from "./ItemPages";

export default function Home() {
  return (
    <>
      <div>
        <ItemPages />
      </div>
    </>
  );
}

// SI QUEREMOS QUE ACTUALICE LA PAGINA CUANDO SE HAGA UNA ACCION
// import { useState, useEffect } from "react";
// import axios from "axios";
// import ItemPage from "./ItemPage";

// const Home = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("/api/items")
//       .then((response) => {
//         setItems(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);

//   const updateItemList = () => {
//     axios
//       .get("/api/items")
//       .then((response) => {
//         setItems(response.data);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <ItemPage items={items} onUpdate={updateItemList} />
//     </div>
//   );
// };

// export default Home;
