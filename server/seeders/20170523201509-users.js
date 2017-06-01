'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [{
        username: "Charly",
        firstname: "Charles",
        lastname: "Verleyen",
        email: "charles@hotmail.com",
        password: "test",
        address: "woodlawn street 45, honolulu, Hawaii, USA",
        zipcode: "78885",
        supplier: true,
        latitude: 21.318399,
        longitude: -157.801251,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Jasmina",
        firstname: "Jasmine",
        lastname: "Slovak",
        email: "jasslo@gmail.com",
        password: "test",
        address: "aka street 87, honolulu, Hawaii, USA",
        zipcode: "87654",
        latitude: 21.3090518,
        longitude: -157.7114537,
        supplier: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "Kano",
        firstname: "Kanoa",
        lastname: "Cleveland",
        email: "kano@gmail.com",
        password: "test",
        address: "delta street 134, honolulu, Hawaii, USA",
        zipcode: "87654",
        latitude: 21.3090518,
        longitude: -157.7114537,
        supplier: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: "gtut",
        firstname: "Gaganvir",
        lastname: "Tut",
        email: "gtut@yahoo.com",
        password: "test",
        address: "delta street 134, honolulu, Hawaii, USA",
        zipcode: "87654",
        latitude: 21.3090518,
        longitude: -157.7114537,
        supplier: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
