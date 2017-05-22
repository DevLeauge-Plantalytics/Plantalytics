/*jshint esversion:6*/
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post",
  {
    subject: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: function(models) {
        Post.belongsTo(models.User, {
          as: 'Author',
          foreignKey:{
            name: 'writer',
            allowNull: false,
          },
        });
      }
    }
  });

  return Post;
};