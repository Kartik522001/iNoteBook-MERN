const mongoose = require('mongoose');

const con = mongoose.connect('mongodb://localhost:27017/iNotebook').then(() => console.log("Connected DB")).catch((err) => console.log(err));

module.exports = con;