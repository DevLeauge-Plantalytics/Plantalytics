/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail:true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      }
    },
    supplier: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Request, {
          foreignKey:{
            name: 'Buyer',
            allowNull: false,
          },
        });
        User.hasMany(models.Request, {
          foreignKey:{
            name: 'Supplier',
            allowNull: false,
          },
        });
        // User.hasMany(models.Request, {
        //   foreignKey:{
        //     name: 'Sender',
        //     allowNull: false,
        //   },
        // });
        // User.hasMany(models.Request, {
        //   foreignKey:{
        //     name: 'Receiver',
        //     allowNull: false,
        //   },
        // });
      }
    }
  });

  return User;
};