const Pool = require('pg').Pool;

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "123456",
    database: "postgres"
});

module.exports = pool;

// module.exports = client;
// // client.connect();

// // client.query(`select * from users`, (err, res) => {
// //     if(!err){
// //         console.log(res.rows);
// //     }
// //     else {
// //         console.log(err.message);
// //     }
// //     client.end;
// // })
