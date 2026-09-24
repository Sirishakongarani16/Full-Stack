const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use((req, res, next) => {
    console.log("Request Method: " + req.method);
    console.log("Request URL: " + req.url);
    console.log("----------------------");
    next();
});

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js Server");
});

// About Route
app.get("/about", (req, res) => {
    res.send("This is About Page");
});

// Start Server
app.listen(PORT, () => {
    console.log("Server running at http://localhost:" + PORT);
});