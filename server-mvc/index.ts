import express, { Request, Response } from "express";
import listEndpoints from "express-list-endpoints";
const userRoute = require("./routes/User");
const app = express();

const port = 3001;
app.use(express.json()); //middleware that allows for us to use json

app.use("/", userRoute)


app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

console.table(listEndpoints(app));
