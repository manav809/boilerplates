import express from "express";
import cors from "cors";
import axios from "axios";
import * as redis from "redis";

const app = express();

app.use(cors());
const port = 3000;
const client = redis.createClient();

const DEFAULT_EXPIRATION = 3600;
client.connect().catch(console.error);

app.get("/photos", async (req, res) => {
  const albumId = req.query.albumId;

  const cachedPhotos = await client.get("photos");

  if (cachedPhotos != null) {
    const dataString =
      typeof cachedPhotos === "string"
        ? cachedPhotos
        : cachedPhotos.toString("utf-8");
    console.log("Cache Hit")
    return res.json(JSON.parse(dataString));
  }
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/photos",
    { params: { albumId } }
  );
  console.log('Cache Miss')
  client.SETEX("photos", DEFAULT_EXPIRATION, JSON.stringify(data));

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
