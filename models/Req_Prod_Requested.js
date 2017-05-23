module.exports = function(sequelize, DataTypes) {
  var Req_Prod_Requested = sequelize.define("Req_Prod_Requested", {
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
  });
  return Req_Prod_Requested;
};