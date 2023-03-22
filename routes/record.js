
const express = require('express');
const router = express.Router();
const database = require('../config/database')


router.get('/checking', (req, res) => {
    var  data = req.query;
var query = "select * from record where username=? and date=?";
database.query(query,[data.username,data.date],(err,rows)=>{
      if (rows.length == 0) {
              return res.status(401).json({status:"belum checkin"});
      }else{
        return res.status(200).json({status:"sudah checkin"});
      }
})
});
router.post('/checkin', (req, res) => {
    var  data = req.query;
var query = "insert into record(username,checkin,date) values(?,?,?)";
database.query(query,[data.username,data.checkin,data.date],(err,rows)=>{
      if (!err) {
              return res.status(200).json({status:"true",response:"Succesfully checkin!"});
      }
})
});
router.get('/getinfo', (req, res) => {
    var  data = req.query;
var query = "select * from record where username=? and date=?";
database.query(query,[data.username,data.date],(err,rows)=>{
      if (rows.length == 0) {
              return res.status(404).json({status:"false"});
      }else{
        return res.status(200).json({status:"true",rows});
      }
})
});

router.post('/checkout', (req, res) => {
    var  data = req.query;
    var query = "update record set checkout =? where date=? and username=?";
    database.query(query,[data.checkout,data.date,data.username],(err,rows)=>{
          if (!err) {
                  return res.status(200).json({status:"true",response:"Succesfully checkout!"});
          }
    })
});

module.exports = router;