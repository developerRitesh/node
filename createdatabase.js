var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "admin1234",
  password: "admin1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});