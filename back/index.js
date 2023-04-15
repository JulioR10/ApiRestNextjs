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
  const items = await collection.find({}).toArray();
  res.json(items);
});

app.get("/items/:id", async (req, res) => {
  const item = await collection.findOne({ _id: new ObjectId(req.params.id) });
  res.json(item);
});

app.post("/items", async (req, res) => {
  try {
    const newItem = req.body;
    const result = await collection.insertOne(newItem);
    if (result && result.ops && result.ops.length > 0) {
      res.status(201).json(result.ops[0]);
    } else {
      res.status(400).json({ message: "Error creating new item" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/items/:id", async (req, res) => {
  const updatedItem = req.body;
  const result = await collection.replaceOne(
    { _id: new ObjectId(req.params.id) },
    updatedItem
  );
  res.json(result.modifiedCount > 0);
});

app.delete("/items/:id", async (req, res) => {
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
