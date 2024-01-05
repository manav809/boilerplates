import express from "express";
import listEndpoints from "express-list-endpoints";

const app = express();

app.use(express.json()); //allows for post of JSON

app.get("/", (req, res) => {
  res.status(200).json({ Hello: "World" });
});

const PORT = 3001;

app.list(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.table(listEndpoints(app))