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
      },
      {
        ownerId: 4,
        typeId: 6,
        sizeId: 3,
        brand: 'Specialized',
        model: 'Globe',
        pricePerDay: 3500,
        title: `Daily 2: a great commuter`,
        description: `At the same time I can see everything around me without craning my neck uncomfortably to peer out from under my helmet. I feel very heads-up and I’m able to make good eye contact with drivers, pedestrians, and other bicyclists. Sweet Hubs has commented on how comfortable I look when I ride.`,
        nearestCity: "North Charleston",
        isAvailable: true,
        latitude: 32.864000,
        longitude: -79.98000
      },      
      {
        ownerId: 5,
        typeId: 6,
        sizeId: 5,
        brand: 'Specialized',
        model: 'Globe Daily City',
        pricePerDay: 4000,
        title: `All-around city bike perfect for adventure`,
        description: `The Daily 02 uses a traditional rear derailleur with a cuff protector chainring, and it upgrades to metal pedals. The handlebars are a bit bigger and taller, it keeps the full fenders, but uses a small rear rack with aluminum tray. Actually, for 2011, all Globe models are moving to aluminum trays to replace the better looking wood ones (our opinion). Their product manager says they did it for eco reasons, but on a couple we rode there was a bit of rattling on one of them. Could have just been loose, but we’d still like to see the wood offered, at least as an option.`,
        nearestCity: "Mount Pleasant",
        isAvailable: true,
        latitude: 32.80000,
        longitude: -79.98540
      },      
      {
        ownerId: 6,
        typeId: 7,
        sizeId: 2,
        brand: 'Norco',
        model: 'City Glide 24"',
        pricePerDay: 2000,
        title: `Great for around the neighborhood with the family`,
        description: `The Norco City Glide 24” was a fine bike, but did not meet my needs as a rider. It rode well, but the handle shifters were a bit stiff making it hard to gear down when going up bigger hills. Without fenders and a chain guard, it makes every day, all weather cycling difficult, and the hunched forward positioning put a lot of strain on my wrists and back. Overall, this is not my bike of choice because it needs to be a bike that’s comfortable enough to ride everyday to school, classes, and to hang out with friends.`,
        nearestCity: "Mount Pleasant",
        isAvailable: true,
        latitude: 32.863300,
        longitude: -79.98064
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
