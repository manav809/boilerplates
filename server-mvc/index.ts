import express, { Request, Response } from "express";
import listEndpoints from "express-list-endpoints";
import routes from "./routes";
const app = express();

const port = 3000;
app.use(express.json()); //middleware that allows for us to use json

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

routes(app);


