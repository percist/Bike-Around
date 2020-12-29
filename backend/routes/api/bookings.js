const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Listing, Booking } = require('../../db/models')

const router = express.Router();

// retrieve all bookings for a single user
router.get('/', asyncHandler(async (req, res, next) => {

}));

// retrieve a single booking
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

// create a single booking
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

// edit a single booking
router.put('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

// delete a booking
router.delete('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));


module.exports = router;