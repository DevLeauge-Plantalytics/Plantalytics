/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Contract = sequelize.define("Contract",
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
        Contract.belongsTo(models.Quotation, {
          foreignKey:{
            name: 'Quotation_id',
            allowNull: false,
          },
        });
      }
    }
  });
  return Contract;
};