const { Booking, Listing } = require("./models");

async function list() {
    return await Booking.findAll();
}

async function userList(id) {
    const bookings = await Booking.findAll({
        where: {
            userId: id
        }, 
    })
    const listing = await Listing.findOne({
        id: bookings[0].dataValues.listingId,
        include: {
            all: true
        }
    }
        
        )
    return { bookings, listing }
}

async function one(id) {
    return await Booking.findByPk(id);
}

async function create(details) {
    const booking = await Booking.create(details)
    return booking;
}

module.exports = {
    list,
    userList,
    one,
    create
}