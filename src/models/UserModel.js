const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true
   },
   email: {
       type: String,
       trim: true,
       lowercase: true,
       unique: true,
       required: true

   },
   password: {
       type: String,
       required: true,
       trim: true
   },


}, { timestamps: true })


module.exports = mongoose.model('people', userSchema)





