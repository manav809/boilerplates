import express from "express";
const router = express.Router();
const controller = require("../controllers/UserController");

router.get("/user", controller.get);
router.get("/username", controller.getName)
module.exports = router;
