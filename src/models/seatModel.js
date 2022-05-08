const mongoose = require('mongoose')


const SeatSchema = new mongoose.Schema({
    SeatNo: {
        type: Number,
        required: true
    },
    movieshowId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'show'
    },
    available: {
        type: Boolean
    }


}, { timestamps: true });

module.exports = mongoose.model('Seat', SeatSchema)
