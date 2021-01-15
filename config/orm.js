// Dependencies
const connection = require("../config/connection");

// Helper function for SQL strings
function questionMarks(num) {
    // empty array
    let arg = [];
    for (var i = 0; i < num; i++) {
        //adds '?' to array
        arg.push('?');
    }
    return arg.toString();
}

// Another helper function to change objects key value as string
    function objectsToSQL(obj) {
        //empty array
        let arg = [];
        for (var key in obj) {
            var value = obj[key];
            // First if statement
            if (Object.hasOwnProperty.call(obj, key)) {
                if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                    value = '"' + value + '"';
                }
                // pushing to arg array
                arg.push(key + '=' + value);
            }
        }
        return arg.toString();
}

// The Mighty ORM
const orm = {
    // Selects all data in burgers table
    all: function(table, callback) {
        let dbQuery = `SELECT * FROM ${table};`;
        connection.query(dbQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    // Inserting new burger to table
    create: function(table, cols, vals, callback) {
        let dbQuery = `INSERT INTO ${table} (${cols.toString()}) VALUES (${questionMarks(vals.length)});`;
        console.log(dbQuery);

        connection.query(dbQuery, vals, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },

    // Updating burger in burgers table
    update: function(table, data, condition, callback) {
        let dbQuery = `UPDATE ${table} SET ${objectsToSQL(data)} WHERE ${condition};`;
        console.log(dbQuery);

        connection.query(dbQuery, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;