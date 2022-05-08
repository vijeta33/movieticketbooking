const express = require('express');
const router = express.Router();

const bookingController =require("../controllers/bookingcontroller")
//const myMiddleware = require('../middleware/middleware');
const userController = require("../Controllers/UserController")





//------------------------User routes-----------------------
router.post('/register', userController.createUser)
router.post('/login', userController.userLogin)
router.post('/theatres' ,bookingController.createTheatre)
router.post('/movies',bookingController.createmovieshow)
router.post('/seats',bookingController.createseats)
router.get('/seats', bookingController.getavailableseats) 
router.get('/noseats', bookingController.getNoseats) 
router.put('/seats/:seatId',bookingController.bookseats)






module.exports = router;