const mysql = require('mysql2');

var connect = mysql.createConnection({
    host:"ap-southeast.connect.psdb.cloud",
    user:"myby3my36o5y0407st0n",
    password:"pscale_pw_CQ7DpCk05KUZp3nYyGSOdDythTybifrp33FPPN0ovTI",
    database:"dbtest",
    port:"3306",
    ssl:{"rejectUnauthorized":true}
});

module.exports = connect;   
