import express, { Express } from "express";
import HostRouter from "./host";
import models from "../models";
import listEndpoints from "express-list-endpoints";
import * as dotenv from "dotenv";

dotenv.config();

async function routes(app: Express): Promise<void> {

  app.use(function (req, res, next) {
    console.log("Method: ", req.method);
    console.log("Path: ", req.path);
    console.log("Body: ", req.body);
    console.log("---");
    next();
  });
  
  app.use("/", HostRouter);

  models.mongoose
    .connect(process.env.MONGO_URI!)
    .then(() => {
      console.log("Connected To MongoDB Instance");
    })
    .catch(console.error);
  console.table(listEndpoints(app));
}

export default routes;
