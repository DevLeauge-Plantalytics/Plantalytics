/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var D3soil = sequelize.define("D3soil",
    {
      month: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ph: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );
  return D3soil;
};