/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product",
  {
    type: {
      type: DataTypes.ENUM('tomato','banana','watermelon'),
      allowNull: false,
    }
  },{
    classMethods: {
      associate: function(models) {
        Product.belongsToMany(models.Request,
          {
            through:{ model: 'Req_Prod', unique: false}
          }
        );
      }
    }
  });
  return Product;
};