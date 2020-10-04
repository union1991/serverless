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


connection.connect(function(err) {
  if (err) throw err;
  connection.query('select * from account', function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});