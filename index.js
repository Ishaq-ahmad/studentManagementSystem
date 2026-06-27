import express from "express";
const app = express();

import connectDB from "./configs/stdConfig.js";
import userRouter from "./routers/studentRouter.js";

app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(userRouter);

app.get("/", (req, res) => {
    res.render("dashboard");
});

await connectDB();

app.listen(3000, () => {
    console.log("Server Run Successfully");
});