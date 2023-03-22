const app = require('./middleware/index')

const http = require('http');
const connect = require('./config/database')
const server = http.createServer(app);


server.listen(process.env.PORT ||3452,()=>{
    console.log("server run")
});
connect.connect((err)=>{
    if (!err) {
        console.log("Database connected");
    }else{
        console.log(err);
    }
});