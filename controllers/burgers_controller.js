// Dependencies
const express = require("express");
const burger = require("../models/burger");

var router = express.Router();

// Index route
router.get("/", (req, res) => {
    burger.listBurgers()
        .then(data => res.render("index", { burgers: data }));
    });

// Add new burger route
router.post("/api/burgers", (req, res) => {
        burger.addBurger(req.body.burger_name)
            .then(() => res.end());
});

// Eat burger route
router.put("/api/burgers/:id", (req, res) => {
        burger.eatBurger(req.params.id)
            .then(() => res.end());
});

module.exports = router;