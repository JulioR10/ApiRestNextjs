import { useState } from "react";
import axios from "axios";

const ItemPost = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/items", {
        name,
        description,
      });

      console.log(response.data);
      setName("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <button type="submit">Create Item</button>
    </form>
  );
};

export default ItemPost;

// import React, { useState } from "react";

// const ItemForm = ({ onAddItem }) => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     onAddItem({ name, description });
//     setName("");
//     setDescription("");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Nombre"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Descripción"
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//       />
//       <button type="submit">Agregar</button>
//     </form>
//   );
// };

// export default ItemForm;
