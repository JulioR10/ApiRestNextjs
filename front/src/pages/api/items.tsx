import axios from "axios";

export default async (
  req: { method: string; body: any; query: { id: any } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
      send: { (arg0: string): void; new (): any };
    };
  }
) => {
  if (req.method === "GET") {
    try {
      const response = await axios.get("http://localhost:5000/items");
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  } else if (req.method === "POST") {
    try {
      const newItem = req.body;
      const response = await axios.post("http://localhost:5000/items", newItem);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  } else if (req.method === "PUT") {
    try {
      const updatedItem = req.body;
      const itemId = req.query.id;
      const response = await axios.put(
        `http://localhost:5000/items/${itemId}`,
        updatedItem
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  } else if (req.method === "DELETE") {
    try {
      const itemId = req.query.id;
      const response = await axios.delete(
        `http://localhost:5000/items/${itemId}`
      );
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  } else {
    res.status(400).send("Bad request");
  }
};
