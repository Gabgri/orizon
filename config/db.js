const mysql = require('mysql');
require('dotenv').config(); // .env

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
});

connection.connect((err) => {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log("Connected!"); 
// connessione.end((err) => {
//     if (err) console.error('Tentativo di chiusura della connessione fallito:', err);
//     else console.log('Connessione chiusa correttamente.');
//   });
 });




module.exports = connection;

