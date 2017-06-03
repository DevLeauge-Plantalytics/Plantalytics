'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Messages', [{
        subject: "Hello",
        body: "How you doing ?",
        Sender: 1,
        Receiver: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject: "Hello",
        body: "I am doing fine. What about you ?",
        Sender: 2,
        Receiver: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        subject: "Hello",
        body: "Not too bad. It was nice talking to you.",
        Sender: 1,
        Receiver: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {});

  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.bulkDelete('Messages', null, {});
  }
};

