const showModel = require("../models/ShowModel")
const TheatreModel = require("../models/TheatreModel")
const seatModel = require("../models/seatmodel")

const createTheatre = async function (req, res) {
    try {
        let data = req.body
        let { name, address } = data
    
        let theatre = { name,address}
        const createddata = await TheatreModel.create(theatre)
        return res.status(201).send({ status: true, message: 'success', data: createddata })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}
const createmovieshow = async function (req, res) {
    try {
        let data = req.body
        let {title,theatreId,language,time,duration,seatCategories} = data
    
        let movieshow = {title,theatreId,language,time,duration,seatCategories  }
        const createddata = await showModel.create(movieshow)
        return res.status(201).send({ status: true, message: 'success', data: createddata })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}

const createseats = async function (req, res) {
    try {
        let data = req.body
        let {SeatNo,type,movieshowId,available} = data
    
        let movieshow = {SeatNo,type,movieshowId,available}
        const createddata = await seatModel.create(movieshow)
        return res.status(201).send({ status: true, message: 'success', data: createddata })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}
const getavailableseats = async function (req, res) {
    try {
    
        let getseats= await seatModel.findOne({available:true})
        return res.status(201).send({ status: true, message: 'success', data: getseats})

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}

const getNoseats = async function (req, res) {
    try {
    
        let getseats= await seatModel.find({available:false})
        return res.status(201).send({ status: true, message: 'success', data: getseats})

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}

const bookseats = async function (req, res) {
    try {
        let getseat = await seatModel.findById({_id: req.params.seatId})
        if(!getseat){
            return res.status(400).send({status:false, msg:"seat unavailable"})
        }
        const updatedSeat = await seatModel.findByIdAndUpdate({_id:req.params.seatId}, {$set: {available: false}}, {new: true})

        return res.status(201).send({ status: true, message: 'success', data: updatedSeat })

    }
    catch (err) {
        console.log(err.message);
        res.status(500).send({ msg: "Some error occured" });
    }
}

module.exports ={createTheatre,createmovieshow,createseats,getavailableseats,getNoseats,bookseats}