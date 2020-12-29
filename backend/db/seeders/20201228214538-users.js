'use strict';
const faker = require("faker");
const bcrypt = require("bcryptjs")

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
          username: 'Demo-lition',
          firstName: 'demo',
          lastName: 'user',
          email: 'demo@user.io',
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          streetAddress1: faker.address.streetAddress(),
          streetAddress2: "",
          city: faker.address.city(),
          state: faker.address.state(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
   
  }
};
