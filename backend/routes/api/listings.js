const express = require('express');
const asyncHandler = require('express-async-handler');
const { Listing, ListingBikePicture, Picture } = require('../../db/models');

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
    const listings = await Listing.findAll({
        include: { all: true }
    });
    res.json({listings: listings})
}));

// retrieve a single listing
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {    
    const listing = await Listing.findByPk(req.params.id, {include: {all:true}});
    res.json({listing: listing})
}));

// retrieve a listing based on location
// router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

// }));

module.exports = router;