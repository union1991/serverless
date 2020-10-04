const mysql = require('mysql');


const createResponse = (status, body) => ({
  statusCode: status,
  body: JSON.stringify(body)
});

const connection  = mysql.createConnection ({ 
  host: "walkway-database.cluster-c8snh8eettaw.ap-northeast-2.rds.amazonaws.com",
  user: "user_walkway",
  password: "dkagh1..",
  database: "walkwaydb",
  connectionLimit : 60
});

const walkwayid = 10
const delist = false

const test = "UPDATE mywalkway SET is_deleted = " + delist + " where walkway_id =" + walkwayid

connection.connect(function(err) {
  if (err) throw err;
  connection.query(test, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});


