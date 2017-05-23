/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product",
  {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },{
    classMethods: {
      associate: function(models) {
        Product.belongsToMany(models.Request, {
          through:{ model: 'Req_Prod_Offered', unique: false}
        });
        Product.belongsToMany(models.Request, {
            through:{ model: 'Req_Prod_Requested', unique: false}
        });
        Product.belongsTo(models.User, {
          foreignKey:{
            name: 'Owner_Id',
            allowNull: false,
          }
        });
      }
    }
  });
  return Product;
};