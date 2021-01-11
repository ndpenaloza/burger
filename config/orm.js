// Dependencies
const connection = require("../config/connection");

// Helper function for SQL strings
questionMarks = (num) => {
    let arg = [];
    for (var i = 0; i < num; i++) {
        arg.push('?');
    }
    return arg.toString();
}

// Another helper function to change objects key value as string
objectsToSQL = (obj) => {
    let arg = [];
    for (var key in obj) {
        var value = obj[key];
        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = '"' + value + '"';
            }
            arg.push(key + '=' + value);
        }
    }
    return arg.toString();
}

// The Mighty ORM
const orm = {
    selectAll: (table, callback) => {
        let dbQuery = `SELECT * FROM ${table};`;
        connection.query(dbQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    insertOne: (table, cols, vals, callback) => {
        let dbQuery = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks});`;
        console.log(dbQuery);

        connection.query(dbQuery, vals, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    updateOne: (table, data, condition, callback) => {
        let dbQuery = `UPDATE ${table} SET ${objectsToSQL(data)} WHERE ${condition};`;
        console.log(dbQuery);

        connection.query(dbQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;