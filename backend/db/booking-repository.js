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
    //need logic here to check and see if a booking already exists with the same dates
    const booking = await Booking.create(details)
    return booking;
}

async function confirm(id) {
    const booking = await Booking.findByPk(id)
    await booking.update({status: 'confirmed'})
    await sequelize.close;
    return booking;
};

async function edit(details) {  
    const booking = await Booking.findByPk(details.bookingId)  
    const updatedBooking = await booking.update(
        details,
        );
    return booking;
}

async function deleteBooking(id) {
    const booking = await Booking.findByPk(id);
    if (!booking) throw new Error('Cannot find booking');
  
    await Booking.destroy({ where: { id: booking.id }});
    return booking.id;
}

module.exports = {
    list,
    userList,
    getOne,
    create,
    confirm,
    edit,
    deleteBooking
}