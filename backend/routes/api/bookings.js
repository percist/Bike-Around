const express = require('express');
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth')
const BookingRepository = require('../../db/booking-repository')
// const { User, Listing, Booking } = require('../../db/models');
const user = require('../../db/models/user');

const router = express.Router();

// retrieve all bookings for a single user
router.get('/', restoreUser, asyncHandler(async (req, res, next) => {
    const user = await req.user.toJSON()
    const { bookings, listings } = await BookingRepository.userList(user.id);
    res.json({ bookings, listings })
}));

// retrieve a single booking
router.get('/:id(\\d+)', restoreUser, asyncHandler(async (req, res, next) => {
    const booking = await BookingRepository.getOne(req.params.id)
    res.json(booking);
}));

// create a single booking
router.post('/', asyncHandler(async (req, res, next) => {
    const booking = await BookingRepository.create(req.body);
    res.json(booking);
}));

// edit a booking
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const booking = await BookingRepository.edit(req.body)
    res.json(booking);
}));

// confirm a booking
router.put('/:id(\\d+)/confirm', asyncHandler(async (req, res, next) => {
    const booking = await BookingRepository.confirm(req.params.id)
    res.json(booking);
}));

// delete a booking
router.patch('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const booking = await BookingRepository.cancelBooking(req.params.id)
    res.json(booking);
}));


module.exports = router;