import express from "express";
const router = express.Router();

import getHello from "../controllers/hello.controller.js";

router.get("/", getHello);

export default router;
