import React from "react";

const ItemList = ({ items }: { items: any }) => (
  <ul>
    {items.map((item: any) => (
      <li key={item.id}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </li>
    ))}
  </ul>
);

export default ItemList;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// type Item = {
//   _id: string;
//   name: string;
//   price: number;
//   description: string;
// };

// const ItemList: React.FC = () => {
//   const [items, setItems] = useState<Item[]>([]);

//   const getItems = async () => {
//     try {
//       const response = await axios.get("/api/items");
//       setItems(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     getItems();
//   }, []);

//   return (
//     <div>
//       <h1>Items:</h1>
//       {items.map((item) => (
//         <div key={item._id}>
//           <h2>{item.name}</h2>
//           <p>{item.description}</p>
//           <p>Price: {item.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;
