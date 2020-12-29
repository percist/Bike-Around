const { Booking } = require("./models");

async function list() {
    return await Booking.findAll();
}

async function userList(id) {
    return await Booking.findAll({
        where: {
            userId: id
        }
    })
}

async function one(id) {
    return await Booking.findByPk(id);
}