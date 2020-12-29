const express = require('express');
const asyncHandler = require('express-async-handler');
const { db } = require('../../config');
const { User, Listing, Booking } = require('../../db/models');
const user = require('../../db/models/user');

const router = express.Router();

// upload a bike picture
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

// change a bike picture
router.post('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

module.exports = router;