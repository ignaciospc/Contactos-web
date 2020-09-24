'use strict';


module.exports = function(sequelize, DataTypes) {

  let alias = "user";

  let col = {
      name:{
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      }
    };
    
    let config = {
      sequelize,
      modelName: 'users',
    };

  let Users = sequelize.define( alias, col, config);

   Users.associate=(models) => {
    Users.belongsToMany(models.user, {
      as : "contacts",
      through : "users_contacts",
      foreignKey : "contacts_id",
      otherKey : "users_id",
      timestamps : false
    })
  }

    return Users;

  }

  






