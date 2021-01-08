const { or } = require("sequelize/types");
const connection = require("../config/connection");
const orm = require("../config/orm");

var burger = {
    selectALL: (callBack) => {
        orm.selectALL("burgers", (res) => {
            callBack(res);
        });
    },
    insertOne: (cols, vals, callBack) => {
        orm.selectALL("burgers", cols, vals, (res) => {
            callBack(res);
        });
    },
    updateOne: (objColVals, condition, callBack) => {
        orm.selectALL("burgers", objColVals, condition, (res) => {
            callBack(res);
        });
    },
    deleteOne: (condition, callBack) => {
        orm.deleteOne("burgers", condition, (res) => {
            callBack(res);
        });
    }
}


module.exports = burger;