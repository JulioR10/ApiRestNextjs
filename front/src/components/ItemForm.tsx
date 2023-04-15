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
