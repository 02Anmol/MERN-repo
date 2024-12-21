const express = require("express");
const app = express();
const router = require("./router/auth-router")

app.use("/api/auth", router)

app.get("/", (req, res)=>{
    res.status(200).send("Welcome Again");
});

app.get("/register", (req, res)=>{
    res.status(200).send("Welcome to registraion page");
});

const PORT = 5002;
app.listen(PORT, ()=>{
    console.log(`server running at port: ${PORT}`);
});