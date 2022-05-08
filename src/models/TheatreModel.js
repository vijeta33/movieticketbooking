const mongoose = require('mongoose');

const CinemaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String
    }

}, { timestamps: true });

module.exports = mongoose.model('Theatre', CinemaSchema);