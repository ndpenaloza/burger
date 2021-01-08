const connection = require("../config/connection");

createQmarks = (num) => {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
} 

translateSql = (obj) => {
    var arr = [];
    for (var key in obj) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
        return arr.toString();
    }
}
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// *            selectAll()
//   *            insertOne()
//               updateOne()
// * Export the ORM object in module.exports.
const orm = {
    selectAll: (table, callback) => {
        var dbQuery = "SELECT * FROM" + table + ";";

        connection.query(dbQuery, (err, res) => {
            if (err) throw err;
            callback(res);
        });
    },
    insertOne: (table, cols, vals, callback) => {
        var dbQuery = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES(" + createQmarks(vals.length) +");"
    
        console.log(dbQuery);
        connection.query(dbQuery, vals, (err, res) => {
            if (err) throw err;
            callback(res);
        })

    },
    updateOne: (table, objColVals, condition, callBack) => {
        var dbQuery = "UPDATE " + table + " SET " + translateSql(objColVals) + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, (err, res) => {
            if (err) throw err;
            callBack(res);
        }); 
    },
    // not sure if i need this
    deleteOne: (table, condition, callBack) => {
        var dbQuery = "DELETE FROM " + table + " WHERE " + condition;
        console.log(dbQuery);

        connection.query(dbQuery, (err, res) => {
            if (err) throw err;
            callBack(res);
        });
    }
}