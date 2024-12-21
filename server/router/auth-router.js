// express.Router

//In express.js , express.ROuter is a mini app without all the serevr configuration but with the ability to define routes, middleware,  and evev have its own set oof route handlers. It allows you to modularize your routes and middleware to keep your code organised and maintainable.

// https://expressjs.com/en/guide/routing.html

// Use the express.ROuter classs to create modular, mountable route handlers. A ROuter instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini-app".


const express = require("express");
const router = express.Router(); // Create a new router instance
const authControllers = require("../controllers/auth-controllers")

// router.get("/",(req, res)=>{
//     res
//     .status(200)
//     .send("Hello World withh using router");
// })

router.route("/").get(authControllers.home)


router.route("/register").get(authControllers.register)


module.exports = router;