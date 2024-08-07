const mysql = require('mysql');
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'orizon'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
 });

module.exports = connection;

