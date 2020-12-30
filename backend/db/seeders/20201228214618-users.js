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
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoo53LzJFStEzEELtE-W4CZPeFgHTLNUj1A&usqp=CAU`,
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJsnmPIdTacKABBTL58KMdnzaibXo4Mtdz-Q&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynaqlKwj26E9lFwX8zCxuQb-zWJ3LWSdbVw&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EBafkTdCwr0iYKlFumQAVBb4MqtS5YJJsA&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8EVPaXa4otOjSC-FuBeFVDxrwVVZhcDsWyw&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMIvC5TQIMh-5vyJBmTUI5yRSjM7mg8Tbog&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkJeSDPYO5fGyXasvwPP_x2MhFCfRmHiGi5g&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRnQNUOyIkBkGHeZSNkib1giFBC2i8i498Wg&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVMRx8u60rBiSCmimIw6ctqfrKJ95bhNxccA&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ22YuvssdE5wj2cj7UbGL5yTcuy4rM2EgrJg&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          username: faker.internet.userName(),
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          zip: faker.address.zipCode(),
          phoneNumber: faker.phone.phoneNumber(),
          profilePictureUrl:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkPN8W1dPw69Gkyj5mSGEF0SvBcSo0nWvaGA&usqp=CAU`,
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
   
  }
};
