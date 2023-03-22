const express = require('express');
const app = express();
const karyawanRoutes = require('../routes/karyawan')
const recordRoutes = require('../routes/record')
const moment = require('moment-timezone');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/karyawan',karyawanRoutes);
app.use('/record',recordRoutes);

const developBy = "Bagus Andre Wijaya";
const connectionOk = true;

app.get('/', (req, res) => {
    const dateTimeNow = moment.tz('Asia/Jakarta').format('YYYY-MM-DD / HH:mm');
  res.status(200).json({
    message: "REST-API-FOR-ATTENDENCE",
    developBy: developBy,
    status: connectionOk,
    DateTime: dateTimeNow
  });
});

module.exports = app;



