import mongoose from "mongoose";



export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://georgemichael:G7MAR1K8K3@cluster0.zwmwk.mongodb.net/Delivery-App').then(()=>console.log("DB connected"));
    // await mongoose.connect('mongodb+srv://georgeadly74:MgKk711983@cluster0.kbvxnk1.mongodb.net/food').then(()=>console.log("DB connected"));
}