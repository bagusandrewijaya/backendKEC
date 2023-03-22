
const express = require('express');
const router = express.Router();
const database = require('../config/database')

router.post('/register', (req, res) => {
      var  data = req.query;
var query = "insert into karyawan(username,password) values(?,?)";
database.query(query,[data.username,data.password],(err,rows)=>{
        if (!err) {
                return res.status(200).json({status:"true",response:"Succesfully Registered!"});
        }
})
});

router.get('/login', (req, res) => {
var query = "SELECT * FROM karyawan WHERE username=?  AND password = ?";
var data = req.query;

try {
        database.query(query,[data.username,data.password],(err,rows)=>{
                if (!err) {
                        if (rows.length == 0) {
                                return res.status(401).json({status:"false",response:"wrong username and password"});
                        }else{
                                return res.status(200).json(rows);
                        }
                } return res.status(500).json(err);
        
        
        })
} catch (error) {
   console.log(err)     
}
});
router.get('/history', (req, res) => {
        var query = "SELECT * FROM record WHERE username=?";
        var data = req.query;
        
        database.query(query,[data.username],(err,rows)=>{
                if (!err) {
                        if (rows.length == 0) {
                                return res.status(204).json({status:"false"});
                        }else{
                                return res.status(200).json(rows);
                        }
                } return res.status(500).json(err);
        
        
        })
        });

router.get('/finduser', (req, res) => {
        var query = "SELECT * FROM karyawan WHERE username=?";
        var data = req.query;
        
        database.query(query,[data.username],(err,rows)=>{
                if (!err) {
                        if (rows.length == 0) {
                                return res.status(401).json({status:"false",response:"wrong username and password"});
                        }else{
                                return res.status(200).json(rows);
                        }
                } return res.status(500).json(err);
        
                
        })
        });
        

module.exports = router;