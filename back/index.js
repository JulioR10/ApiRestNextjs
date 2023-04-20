const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
app.use(express.json());

// Conexión a la base de datos
const uri =
  "mongodb+srv://JulioRD:Julio@cluster0.xqzvr.mongodb.net/Parafront?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let collection;

async function connect() {
  try {
    await client.connect();
    console.log("Connected to the database");
    collection = client.db("Parafront").collection("items");
  } catch (err) {
    console.error(err);
  }
}
connect();

// Rutas
app.get("/items", async (req, res) => {
  const items = await collection.find().toArray();
  console.log("GET");
  res.json(items);
});

app.get("/items/:id", async (req, res) => {
  const item = await collection.findOne({ _id: new ObjectId(req.params.id) });
  console.log("GETBYID");
  res.json(item);
});

app.post("/items", async (req, res) => {
  console.log("POST");
  try {
    if (!req.body.name || !req.body.description) {
      return res
        .status(400)
        .json({ message: "Both name and description are required" });
    }
    const newItem = req.body;
    const result = await collection.insertOne(newItem);
    console.log("Resultado de la inserción:", result);

    if (result && result.acknowledged && result.insertedId) {
      const insertedItem = { _id: result.insertedId, ...newItem };
      res.status(201).json(insertedItem);
    } else {
      console.log("Error al crear el elemento:", result);
      res.status(400).json({ message: "Error creating new item" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/items/:id", async (req, res) => {
  console.log("PUT");
  const updatedItem = req.body;
  const result = await collection.replaceOne(
    { _id: new ObjectId(req.params.id) },
    updatedItem
  );
  res.json(result.modifiedCount > 0);
});

app.delete("/items/:id", async (req, res) => {
  console.log("DELETE");
  const result = await collection.deleteOne({
    _id: new ObjectId(req.params.id),
  });
  res.json(result.deletedCount > 0);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Cerrar la conexión con la base de datos
process.on("SIGINT", async () => {
  try {
    await client.close();
    console.log("Disconnected from the database");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
