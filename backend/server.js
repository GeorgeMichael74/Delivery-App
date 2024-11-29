import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config.js';
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// Api endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/images", express.static("uploads"));
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
   res.send("API Working");
});

app.listen(port, () => {
   console.log(`Server Started on http://localhost:${port}`);
});

// mongodb+srv://georgeadly74:MgKk711983@cluster0.kbvxnk1.mongodb.net/?
// mongodb+srv://georgemichael:G7MAR1K8K3@cluster0.zwmwk.mongodb.net/Delivery-App
