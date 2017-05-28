/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var D3rainfall = sequelize.define("D3rainfall",
    {
      month: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      rainfall: {
        type: DataTypes.INTEGER,
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
    }
  );
  return D3rainfall;
};