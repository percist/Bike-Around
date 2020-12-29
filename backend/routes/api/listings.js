const express = require('express');
const asyncHandler = require('express-async-handler');
const { User, Listing } = require('../../db/models')

const router = express.Router();

// retrieve all listings
router.get('/', asyncHandler(async (req, res, next) => {

}));

// retrieve a listing
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

module.exports = router;