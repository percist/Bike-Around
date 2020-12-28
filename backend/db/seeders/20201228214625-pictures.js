'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pictures', [{
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: faker.image.people(),
        url: "https://files.bikeindex.org/uploads/Pu/28/large_IMG_0368.JPG",
        url: "https://files.bikeindex.org/uploads/Pu/26/large_snowy_fixed.JPG",
        url: "https://files.bikeindex.org/uploads/Pu/69/large_photo.JPG"

      }], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pictures', null, {});
  }
};
