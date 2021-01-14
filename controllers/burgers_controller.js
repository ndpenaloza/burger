// Dependencies
const express = require("express");
const burger = require("../models/burger");

var router = express.Router();

// Index route
router.get("/", (req, res) => {
    burger.all((data) => {
        let burgerObject = { burgers: data };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

// Add new burger route
router.post("/api/burgers", (req, res) => {
        burger.create(["burger_name", "devoured"],
        [req.body.burger_name, req.body.devoured], (result) => {
            res.json({ id: result.insertId });
        });
});

// Eat burger route NEED TO COMPLETE THIS ROUTE
router.put("/api/burgers/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, (result) => {
        if (result.changedRows === 0) {
            return res.end();
        } else {
            res.end();
        }
    });
});

module.exports = router;