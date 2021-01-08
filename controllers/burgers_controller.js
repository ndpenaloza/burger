const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all((data) => {
        var burgerObject = {
            burger:data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });

    router.post("/api/burgers", (req, res) => {
        burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], (result) => {
            res.json({id: result.insertID});
        } 
        )
    });

    router.put("/api/burgers/:id", (req, res) => {
        let condition = "id = " + req.params.id;
        console.log("condition", condition);
        
        burger.updateOne({ devoured: req.body.devoured}, condtion, (result) => {
            if ((result, changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    router.deleteOne(condition, (req, res) => {
        let condition = "id = " + req.params.id;
        console.log("condition", condition);

        burger.deleteOne(condition, (result) => {
            if ((result, changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    })
});


module.exports = router;