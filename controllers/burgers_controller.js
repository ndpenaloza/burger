// Dependencies
const express = require("express");
const burger = require("../models/burger");

var router = express.Router();

// Index route - get
router.get("/", (req, res) => {
    burger.all((data) => {
        let burgerObject = { burgers: data };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

// Add new burger route - post
router.post("/api/burgers", (req, res) => {
        burger.create(["burger_name"],
        [req.body.burgerName], (result) => {
            res.json({ id: result.insertId });
        });
});

// Eat burger route - update
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