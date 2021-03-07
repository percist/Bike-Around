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
  const allListingBookings = await Booking.findAll({
    where: {
      listingId: details.listingId
    }
  })
  const booked = allListingBookings.findIndex(booking => 
    !(booking.startDay > new Date(details.endDay) || booking.endDay < new Date(details.startDay)) 
    )
  if (booked === -1){
    const booking = await Booking.create(details)
    return booking;
  } else {
    return null
  }
}

async function confirm(id) {
  const booking = await Booking.findByPk(id)
  await booking.update({ status: 'confirmed' })
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

async function cancelBooking(id) {
  const booking = await Booking.findByPk(id)
  await booking.update({ status: 'cancelled' })
  await sequelize.close;
  return booking;
}

module.exports = {
  list,
  userList,
  getOne,
  create,
  confirm,
  edit,
  cancelBooking
}