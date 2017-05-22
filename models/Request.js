module.exports = function(sequelize, DataTypes) {
  var Request = sequelize.define("Request",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    delivery: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        Request.belongsTo(models.User, {
          as: 'Purchaser',
          foreignKey:{
            name: 'Buyer',
            allowNull: false,
          },
        });
        Request.belongsTo(models.User, {
          as: 'Vendor',
          foreignKey:{
            name: 'Supplier',
            allowNull: false,
          },
        });
        Request.belongsToMany(models.Product,
          {
            through:{ model: 'Req_Prod', unique: false}
          }
        );
        Request.hasMany(models.Message, {
          foreignKey:{
            name: 'Request_Id',
            allowNull: false,
          },
        });
      }
    }
  });
  return Request;
};
