/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var D3temp = sequelize.define("D3temp",
    {
      month: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      temperature: {
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
  return D3temp;
};