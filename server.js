//server.js

// Dependencies 
const express = require("express"); 
const exphbs = require("express-handlebars");
const burgerController = require("./controllers/burgers_controller");

// Use Express
const app = express();

// Port
const PORT = process.env.PORT || 8080;

// App configuration
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Route
app.use(burgerController);

// Listening on Port
app.listen(PORT, () => {
    console.log("SERVER LISTENING ON PORT: " + PORT + "!!!");
});