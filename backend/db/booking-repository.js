const { sequelize, Booking, Listing } = require("./models");

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

async function getOne(id) {
    const booking = await Booking.findByPk(id);
    return booking;
}

async function create(details) {
    const booking = await Booking.create(details)
    return booking;
}

async function confirm(id) {
    const booking = await Booking.findByPk(id)
    await booking.update({status: 'confirmed'})
    await sequelize.close;
    console.log(booking)
    return booking;
};

module.exports = {
    list,
    userList,
    getOne,
    create,
    confirm
}