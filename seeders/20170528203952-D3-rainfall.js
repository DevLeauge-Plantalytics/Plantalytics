'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('D3rainfalls', [{
        month: 1,
        rainfall: 100 ,
        latitude: 41.40338,
        longitude: 2.17403,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 1,
        rainfall: 100 ,
        latitude: 41.40338,
        longitude: 2.17403,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 2,
        rainfall: 100 ,
        latitude: 41.40338,
        longitude: 2.17403,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('D3rainfalls', null, {});
  }
};
