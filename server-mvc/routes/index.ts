import { Express } from "express";
import HostRouter from "./host";
import models from "../models";
import listEndpoints from "express-list-endpoints";

async function routes(app: Express): Promise<void> {
  app.use("/", HostRouter);

  models.mongoose
    .connect(process.env.CONNECTION_URL!)
    .then(() => {
      console.log("Connected To MongoDB Instance");
    })
    .catch(console.error);
  console.table(listEndpoints(app));
}

export default routes;
