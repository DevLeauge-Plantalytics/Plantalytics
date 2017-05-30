/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var D3soil = sequelize.define("D3soil",
    {
      month: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ph: {
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
  return D3soil;
};