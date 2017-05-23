'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Products', [{
        type: 'Tomato',
        Owner_Id:"1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'Banana',
        Owner_Id:"2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {});

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.bulkDelete('Products', null, {});
  }
};
