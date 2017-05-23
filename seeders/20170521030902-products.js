'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

      return queryInterface.bulkInsert('Products', [{
        name: "Tomato",
        quantity: "100",
        Owner_Id:"1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Banana",
        quantity: "50",
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
