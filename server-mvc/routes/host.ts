import express from "express";
const router = express.Router();
import HostController from "../controllers/host";

router.get("/host", HostController.getHost);

export default router;
