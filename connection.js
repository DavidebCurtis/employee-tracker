const mysql = require("mysql2");

const connection = mysql.createConnection(
  {
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "Davids_Grocery_db",
  },
  console.log("Connected to the Davids_Grocery_db database.")
);

// connection.query("SELECT * FROM departments", function (err, res) {
//   if (err) throw err;
//   console.table(res);
// });
module.exports = connection;
