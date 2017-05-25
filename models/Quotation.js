/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Quotation = sequelize.define("Quotation", {
    type: {
      type: DataTypes.ENUM("money", "trade", "both"),
      allowNull: false,
    },
    products_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    delivery: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    delivery_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },{
      classMethods: {
        associate: function(models) {
          Quotation.belongsTo(models.Request, {
            as: 'Contract',
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