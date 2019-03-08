const con = require("./con.js");
module.exports = orm = {
	selectAll: (table, cb) => {
		qString = `SELECT * FROM ${table}`;
		con.query(qString, (data) => cb(data));

	},
	insertOne: (table, collums ,values, cb) => {
        qString = `INSERT INTO ${table} (${collums}) VALUES ( ${values.map(val => val)})` 
	    con.query(qString, values, (res) => cb(res));
	},
	updateOne: (table, vals, id_conditional, cb) => {
        qString = `UPDATE ${table}`
        qString = `SET ${vals} WHERE ${id_conditional}`
	    con.query(qString, (res) => cb(res));

	}
}
