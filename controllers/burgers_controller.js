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
});

