const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    theatreId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatre'
    },
    language:{
        type:String
    },
    duration:{
        type:Number,
        required:true
    },
    time: {
        type: Date,
        default: Date.now()
    },
    seatCategories:[{
        row:{
            type:String,
            required:true
        },
        details:{
            numberOfSeats:{
                type:Number,
                required:true
            }
        }
    }]
    

}, { timestamps: true });

module.exports = mongoose.model('show', ShowSchema);