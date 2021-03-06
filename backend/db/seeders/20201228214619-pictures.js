'use strict';
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Pictures', [
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: faker.image.imageUrl()},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/11/GF_010-Aero-Race-Bike-Test-Review-Trek-Madone-SLR-9-Disc-14-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/11/GF_010-Aero-Race-Bike-Test-Review-Trek-Madone-SLR-9-Disc-64-1-600x400.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/11/GF_010-Aero-Race-Bike-Test-Review-Trek-Madone-SLR-9-Disc-44-600x400.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/11/GF_010-Aero-Race-Bike-Test-Review-Trek-Madone-SLR-9-Disc-56-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/11/GF_010-Aero-Race-Bike-Test-Review-Trek-Madone-SLR-9-Disc-47-600x400.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2018/11/GF_010-Aero-Race-Bike-Test-Review-Trek-Madone-SLR-9-Disc-59-600x400.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2019/07/Trek-Domane-SLR-Project-One-MY-2020-Endurance-All-Road-Bike-Rennrad-Test-Review-061-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2019/07/Trek-Domane-SLR-Project-One-MY-2020-Endurance-All-Road-Bike-Rennrad-Test-Review-055-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2019/07/Trek-Domane-SLR-Project-One-MY-2020-Endurance-All-Road-Bike-Rennrad-Test-Review-057-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2019/07/Trek-Domane-SLR-Project-One-MY-2020-Endurance-All-Road-Bike-Rennrad-Test-Review-100-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2017/06/Trek-Emonda-2018-test-review-granfondo-cycling-11-von-29-980x653.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2017/06/Trek-Emonda-2018-test-review-granfondo-cycling-28-von-29-580x387.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2017/06/Trek-Emonda-2018-test-review-granfondo-cycling-29-von-29-580x387.jpg"},
        {url: "https://s14761.pcdn.co/wp-content/uploads/sites/3/2017/06/Trek-Emonda-2018-test-review-granfondo-cycling-26-von-29-580x387.jpg"},
        {url: "https://images.singletracks.com/blog/wp-content/uploads/2014/10/2014-10-07-cannondale-scalpel.jpg"},
        {url: "https://images.singletracks.com/blog/wp-content/uploads/2014/10/IMG_0100-2.jpg"},
        {url: "https://images.singletracks.com/blog/wp-content/uploads/2014/10/IMG_0107-lefty.jpg"},
        {url: "https://images.singletracks.com/blog/wp-content/uploads/2014/10/IMG_0100-2.jpg"},
        {url: "https://bikerumor.com/wp-content/uploads/2010/07/2011-specialized-globe-daily-1-03.jpg"},
        {url: "https://s7d5.scene7.com/is/image/Specialized/9448?bgc=0xF1F1F1&wid=2500&hei=1406&$jpg$"},
        {url: "https://momentummag.com/wp-content/uploads/mp-import/53-Gear-Kids-Kona-1.jpg"},
        {url: 'https://momentummag.com/wp-content/uploads/mp-import/Norco-CityGlide-24inch.jpg'},
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Pictures', null, {});
  }
};
