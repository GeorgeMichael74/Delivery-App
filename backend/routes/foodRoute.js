import express, { Router } from "express";
import {
   addFood,
   listFood,
   removeFood,
} from "../controllers/foodController.js";
import multer from "multer";

// create the get and post method and other method
const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
   destination: "uploads",
   filename: (req, file, cb) => {
      return cb(null, `${Date.now()}${file.originalname}`);
   },
});

const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;
