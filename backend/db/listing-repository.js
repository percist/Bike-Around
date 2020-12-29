const { Listing } = require("./models");

async function list() {
    return await Listing.findAll();
}