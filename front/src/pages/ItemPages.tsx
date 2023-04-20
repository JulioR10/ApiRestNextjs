import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";

// Defina un tipo de objeto para sus elementos.
type ItemType = {
  _id: string;
  name: string;
  description: string;
};

// Para props.
// type ItemPageProps = {
//   items: ItemType[];
// };

const ItemPage = () => {
  const [formState, setFormState] = useState("create");
  const [newItem, setNewItem] = useState({ name: "", description: "" });
  const [currentItem, setCurrentItem] = useState<ItemType | null>(null);

  const [items, setItems] = useState([]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    axios
      .get("/api/items") //http://localhost:5000/items
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [newItem, currentItem, formState, isDeleting]);

  const createItem = async () => {
    await axios.post("/api/items", newItem);
    setNewItem({ name: "", description: "" }); //Actualiza el estado a vacio
    // setItems([...ite, newItem]);
  };

  const updateItem = async () => {
    if (currentItem) {
      await axios.put(`/api/items?id=${currentItem._id}`, newItem);
      setNewItem({ name: "", description: "" });
      setCurrentItem(null);
      setFormState("create");
    }
  };

  const deleteItem = async (itemId: any) => {
    await axios.delete(`/api/items?id=${itemId}`);
    setIsDeleting((prev) => !prev);
  };

  // Actualice la función `editItem` para utilizar el tipo de objeto correcto.
  const editItem = (item: ItemType) => {
    setCurrentItem(item);
    setNewItem({ name: item.name, description: item.description });
    setFormState("update");
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formState === "create") {
      createItem();
    } else if (formState === "update") {
      updateItem();
    }
  };

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map((item: ItemType) => (
          <li key={item._id}>
            {item.name} - {item.description}
            <button onClick={() => editItem(item)}>Edit</button>
            <button onClick={() => deleteItem(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <h2>{formState === "create" ? "Create Item" : "Update Item"}</h2>
        <input
          type="text"
          name="name"
          value={newItem.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="description"
          value={newItem.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <button type="submit">
          {formState === "create" ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export default ItemPage;

// SI QUEREMOS QUE EL ITEM SE MUESTRE EN LA PAGINA PRINCIPAL CON USEEFFECT EN HOME
// const ItemPage = ({ items, onUpdate }: { items: ItemType[]; onUpdate: () => void }) => {
//   // ... El resto del código se mantiene igual

//   const createItem = async () => {
//     await axios.post("/api/items", newItem);
//     setNewItem({ name: "", description: "" });
//     onUpdate(); // Llamar a la función callback
//   };

//   const updateItem = async () => {
//     if (currentItem) {
//       await axios.put(`/api/items?id=${currentItem._id}`, newItem);
//       setNewItem({ name: "", description: "" });
//       setCurrentItem(null);
//       setFormState("create");
//       onUpdate(); // Llamar a la función callback
//     }
//   };

//   const deleteItem = async (itemId: any) => {
//     await axios.delete(`/api/items?id=${itemId}`);
//     onUpdate(); // Llamar a la función callback
//   };

//   // ... El resto del código se mantiene igual
// };

// export default ItemPage;
