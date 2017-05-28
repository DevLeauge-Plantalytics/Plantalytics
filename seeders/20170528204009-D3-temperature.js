'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Messages', [{
        month: 1,
        temperature: 100 ,
        latitude: 41.40338,
        longitude: 2.17403,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 1,
        temperature: 100 ,
        latitude: 41.40338,
        longitude: 2.17403,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        month: 2,
        temperature: 100 ,
        latitude: 41.40338,
        longitude: 2.17403,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Messages', null, {});
  }
};
