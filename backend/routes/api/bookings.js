const express = require('express');
const asyncHandler = require('express-async-handler');
const { db } = require('../../config');
const BookingRepository = require('../../db/booking-repository')
// const { User, Listing, Booking } = require('../../db/models');
const user = require('../../db/models/user');

const router = express.Router();

// retrieve all bookings for a single user
router.get('/', asyncHandler(async (req, res, next) => {
    const bookings = await BookingRepository.userList();
    return res.json(bookings)
}));

// retrieve a single booking
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const booking = await BookingRepository.one(req.params.id)
    return res.json(booking)
}));

// create a single booking
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const { startDay, endDay } = req.body;
    const user = await User.getCurrentUserById({
        where: {
            id: req.params.id
        }
    });

}));

// edit a single booking
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

// delete a booking
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    
}));


module.exports = router;