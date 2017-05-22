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
        Product.belongsToMany(models.Request,
          {
            through:{ model: 'Req_Prod', unique: false}
          }
        );
        Product.belongsToMany(models.User,
          {
            through:{ model: 'Use_Prod', unique: false}
          }
        );
      }
    }
  });
  return Product;
};