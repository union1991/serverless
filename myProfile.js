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


const userindex = '1'

const test = "select B.account_profile, B.account_nickname, C.walkway_name, D.account_profile, C.walkway_id from mywalkway A, account B, walkway C, account D where A.account_id = B.account_id and A.walkway_id = C.walkway_id and C.account_id = D.account_id and A.account_id =" + userindex + " and A.is_deleted = 0" 

connection.connect(function(err) {
  if (err) throw err;
  else console.log("connection success");
  connection.query(test, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
