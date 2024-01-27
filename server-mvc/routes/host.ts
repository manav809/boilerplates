import express from "express";
const router = express.Router();
import HostController from "../controllers/host";

router.use(function (req, res, next) {
  console.log("Method: ", req.method);
  console.log("Path: ", req.path);
  console.log("Body: ", req.body);
  console.log("---");
  next();
});

router.get("/host", HostController.getHost);

export default router;
