const mongoose = require('mongoose')

const MovieticketSchema = new mongoose.Schema({
    movieshowId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'show'
    },
    seatNo:{
        type:Number,
        required:true
    },
    totalprice:{
        type:Number,
        required:true
    }

}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieticketSchema);
