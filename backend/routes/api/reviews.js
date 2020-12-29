const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Listing, Booking } = require('../../db/models')

const router = express.Router();

// create a review
router.post('/:id(\\d+/reviews', asyncHandler(async (req, res, next) => {

}));

// update a review
router.put('/:id(\\d+/reviews', asyncHandler(async (req, res, next) => {

}));

// delete a review
router.delete('/:id(\\d+/reviews', asyncHandler(async (req, res, next) => {

}));

module.exports = router;