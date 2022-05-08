const mongoose = require('mongoose')


const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    date: {
        type: Date,
        required: true,
    },
    startAt: {
        type: String,
        required: true,
        trim: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true,
    },
    total: {
        type: Number,
        required: true,
    },
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true,
    },
    TheatreId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Theatre',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'people'
    }


}, { timestamps: true });

module.exports = mongoose.model('booking', bookingSchema)
