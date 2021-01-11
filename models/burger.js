// Dependencies
const orm = require("../config/orm");

var burger = {
    listBurgers: () => {
        return orm.selectAll("burgers");
    },

    addBurger: (burger) => {
         return orm.insertOne("burgers", { burger_name: burger});
    },

    eatBurger: (id) => {
        return orm.updateOne("burgers", { devoured: true }, `id = ${id}`);
    }
};

module.exports = burger;