// Dependencies
const connection = require("./connection");

dbQuery = (dbQuery, data) => {
    return new Promise((resolve, reject) => {
        connection.query(dbQuery, data, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

// The Mighty ORM
const orm = {
    selectAll: (table) => {
        return dbQuery(`SELECT * FROM ${table};`);
    },

    insertOne: (table, data) => {
        return dbQuery(`INSERT INTO ${table} (${Object.keys(data).join(",")}) VALUES (?)`, Object.values(data));
    },

    updateOne: (table, data, condition) => {
        let updates = Object.keys(data).map(col => `${col} = ?`).join(",");
        return dbQuery(`UPDATE ${table} SET ${updates} WHERE ${condition};`);
    }
};

module.exports = orm;