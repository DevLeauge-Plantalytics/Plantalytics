module.exports = function(sequelize, DataTypes) {
  var Req_Prod_Offered = sequelize.define("Req_Prod_Offered", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    version:{
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });
  return Req_Prod_Offered;
};