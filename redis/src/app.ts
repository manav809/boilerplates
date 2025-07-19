import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());
const port = 3000;

app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
    { params: { albumId } }
  );
  res.json(data);
});

app.get("/photos/:id", async (req, res) => {
  const id = req.params.id;
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/photos/${id}`
  );
  return res.json(data);
});

app.listen(port, () => {
  return console.log(`Express is listening on port ${port}`);
});
