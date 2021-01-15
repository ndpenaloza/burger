// Dependencies
const orm = require("../config/orm");

var burger = {
    //  Get
        all: function(callback) {
        orm.all("burgers", (res) => {
            callback(res);
        });
    },
 
    // Post
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, (res) => {
            callback(res);
        });
    },

    // Update
    update: function(objectsToSQL, condition, callback) {
        orm.update("burgers", objectsToSQL, condition, (res) => {
            callback(res);
        });
    }
};

module.exports = burger;