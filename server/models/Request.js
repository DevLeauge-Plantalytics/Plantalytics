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
    },
    accepted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
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
        Request.belongsToMany(models.Product, {
            as: 'interTableOff',
            through:{ model: 'Req_Prod_Offered', unique: false}
        });
        Request.belongsToMany(models.Product, {
            as: 'interTableReq',
            through:{ model: 'Req_Prod_Requested', unique: false}
        });
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
