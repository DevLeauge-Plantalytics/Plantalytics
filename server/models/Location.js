/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Location = sequelize.define("Location",
  {
    Zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    latitude:{
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    longitude:{
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },{
    classMethods: {
      associate: function(models) {
        Location.belongsTo(models.User, {
          as: 'Locator',
          foreignKey:{
            name: 'Locator_Id',
            allowNull: false,
          }
        });
      }
    }
  });
  return Location;
};