const orm = require("../config/orm");

var burger = {
    selectALL: (callBack) => {
        orm.selectALL("burgers", (res) => {
            callBack(res);
        });
    },
    insertOne: 

    })
}