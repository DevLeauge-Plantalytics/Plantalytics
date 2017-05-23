/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Quotation = sequelize.define("Quotation", {
    type: {
      type: DataTypes.ENUM("money", "trade", "both"),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    delivery_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },{
      classMethods: {
        associate: function(models) {
          Quotation.belongsTo(models.Request, {
            foreignKey:{
              name: 'Request_Id',
              allowNull: false,
            },
          });
        }
      }
    }
  );
  return Quotation;
};