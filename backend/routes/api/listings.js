const express = require('express');
const asyncHandler = require('express-async-handler');
const { Listing } = require('../../db/models');

const router = express.Router();

const listingNotFoundError = (id) => {
    const err = Error('Listing not found');
    err.errors = [`Listing with the id of ${id} could not be found.`];
    err.title = 'Listing not found.';
    err.status = 404;
    return err;
}

// retrieve all listings
router.get('/', asyncHandler(async (req, res, next) => {
    const listings = await Listing.findAll();
    res.json({listings: listings})
}));

// retrieve a listing
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

// retrieve a listing based on location
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

}));

module.exports = router;