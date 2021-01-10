// Dependencies
const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", (req, res) => {
    burger.all((data) => {
        var burgerObject = { burger: data };
        res.render("index", burgerObject);
    });

    router.post("/api/burgers", (req, res) => {
        burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (results) => {
            res.json({ id: results.insertID});
        } 
        )
    });

    router.put("/api/burgers/:id", (req, res) => {
        let condition = "id = " + req.params.id;
        
        burger.updateOne({ devoured: req.body.devoured}, condition, (results) => {
            if ((results, changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    router.deleteOne("/api/burgers/:id", (req, res) => {
        let condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, (results) => {
            if (result, changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});


module.exports = router;