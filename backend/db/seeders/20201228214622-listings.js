'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Listings', [
      {
        ownerId: 1,
        typeId: 1,
        sizeId: 8,
        brand: 'Trek',
        model: 'Domane',
        pricePerDay: 5000,
        title: `Domane SLR 2020 – hidden features, aero design and gravel capabilities`,
        description: `Up until now, the rear IsoSpeed on the Domane was adjusted on the seat tube. For the new model, the Trek engineers have moved this to the top tube, just like the current Madone. What’s the advantage? The compliance and adjustment range can be tuned individually for each frame size and an additional elastomer integrated into the design is claimed to offer even more damping and shock absorption.`,
        nearestCity: "Charleston",
        isAvailable: true,
        latitude: 32.864791,
        longitude: -79.98064
      },
      {
        ownerId: 2,
        typeId: 1,
        sizeId: 7,
        brand: 'Trek',
        model: 'Madone',
        pricePerDay: 5000,
        title: `Trek Madone SLR 9 Disc 2019 with Carbon Wheels`,
        description: `The gorgeous matt black frame, paired with glossy logos and colour accents screams speed. Only when examining it closely will you discover Trek’s individually adjustable IsoSpeed damper, which is designed to provide adjustable flex between the frame and seat tube for comfort. The designers have done a great job of integrating the damper into the overall design. As with the competition, integration is one of the key aspects of the Madone. Cables and hoses are routed internally through the cockpit and the frame and the Di2 junction box is hidden in the handlebars. The chain catcher, as well as the cadence and speed sensor, are hardly visible, and the aerodynamic transition between frame and fork is much smoother when turning than compared to the competition.`,
        nearestCity: "Charleston",
        isAvailable: true,
        latitude: 32.882587,
        longitude: -79.991741
      },
      {
        ownerId: 3,
        typeId: 1,
        sizeId: 6,
        brand: 'Trek',
        model: 'Emonda',
        pricePerDay: 5000,
        title: "Super Light 2018 Trek Emonda SLR Disc",
        description: `The new Trek Émonda SLR is kitted with many of Trek’s tried-and-tested features like the Ride Tuned seat mast, an E2 Tapered steerer, integrated DuoTrap S speed and cadence sensors – alongside the ultimate decision regarding the more aggressive H1 or comfort-focused H2 geometry.`,
        nearestCity: "Summerville",
        isAvailable: true,
        latitude: 33.016579,
        longitude: -80.166701
      },
      {
        ownerId: 2,
        typeId: 10,
        sizeId: 4,
        brand: 'Cannondale',
        model: 'Scalpel',
        pricePerDay: 5000,
        title: "2014 Cannondale Scalpel Team Carbon",
        description: `With 4" of travel front and rear, and fairly steep angles, the Scalpel is meant for one thing: racing. The suspension serves to tame the worst of the trail chunder and prevent fatigue, but it doesn’t necessarily improve the rider's ability to hit super gnarly technical trails.` ,
        nearestCity: "Charleston",
        isAvailable: true,
        latitude: 32.882587,
        longitude: -79.991741
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
