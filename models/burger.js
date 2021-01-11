// Dependencies
const orm = require("../config/orm");

var burger = {
    listBurgers: (callback) => {
        orm.selectAll("burgers", (res) => {
            callback(res);
        });
    },

    addBurger: (cols, vals, callback) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            callback(res);
        });
    },

    eatBurger: (objectsToSQL, condition, callback) => {
        orm.updateOne("burgers", objectsToSQL, condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;