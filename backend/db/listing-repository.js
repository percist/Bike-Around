const { Listing } = require("./models");

export async function list() {
    return await Listing.findAll();
}

module.exports = {
    list,
}