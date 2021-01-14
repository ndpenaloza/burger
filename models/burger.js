// Dependencies
const orm = require("../config/orm");

var burger = {
    all: function(callback) {
        orm.all("burgers", (res) => {
            callback(res);
        });
    },

    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, (res) => {
            callback(res);
        });
    },

    update: function(objectsToSQL, condition, callback) {
        orm.update("burgers", objectsToSQL, condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;