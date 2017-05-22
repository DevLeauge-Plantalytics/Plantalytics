/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message",
  {
    subject: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Message.belongsTo(models.User, {
          as: 'Author',
          foreignKey:{
            name: 'Sender',
            allowNull: false,
          },
        });
        Message.belongsTo(models.User, {
          as: 'Listener',
          foreignKey:{
            name: 'Receiver',
            allowNull: false,
          },
        });
        Message.belongsTo(models.Request, {
          foreignKey:{
            name: 'Request_Id',
            allowNull: false,
          },
        });
      }
    }
  });

  return Message;
};