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
  const photos = await getOrSetCache(`photos?albumId=${albumId}`, async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/photos",
      { params: { albumId } }
    );
    return data;
  });

  //   const cachedPhotos = await client.get(`photos?albumId=${albumId}`);

  //   if (cachedPhotos != null) {
  //     const dataString =
  //       typeof cachedPhotos === "string"
  //         ? cachedPhotos
  //         : cachedPhotos.toString("utf-8");
  //     console.log("Cache Hit");
  //     return res.json(JSON.parse(dataString));
  //   }
  //   const { data } = await axios.get(
  //     "https://jsonplaceholder.typicode.com/photos",
  //     { params: { albumId } }
  //   );
  //   console.log("Cache Miss");
  //   client.SETEX(
  //     `photos?albumId=${albumId}`,
  //     DEFAULT_EXPIRATION,
  //     JSON.stringify(data)
  //   );

  res.json(photos);
});

app.get("/photos/:id", async (req, res) => {
  const id = req.params.id;
  const photos = await getOrSetCache(`photos${id}`, async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
    return data
  });
//   const { data } = await axios.get(
//     `https://jsonplaceholder.typicode.com/photos/${id}`
//   );
  return res.json(photos);
});

async function getOrSetCache(key: redis.RedisArgument, cb: () => Promise<any>) {
  const cached = await client.get(key);

  if (cached != null) {
    const cachedStr =
      typeof cached === "string" ? cached : cached.toString("utf-8"); // convert Buffer to string if needed

    return JSON.parse(cachedStr);
  }
  const freshData = await cb();
  await client.SETEX(key, DEFAULT_EXPIRATION, JSON.stringify(freshData));

  return freshData;
}

app.listen(port, () => {
  return console.log(`Express is listening on port ${port}`);
});
