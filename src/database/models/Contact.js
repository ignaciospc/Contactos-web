'use strict';

module.exports = function(sequelize, DataTypes){

  let alias = "contacts";

  let col = {

    name:{
      type : DataTypes.STRING(100),
      allowNull: false,
    },
    phone: {
      type : DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type : DataTypes.STRING(100),
      allowNull: false,
    }

  };

  let config = {
    sequelize,
    modelName: 'contacts',
  }

  let Contacts = sequelize.define(alias, col, config);

 Contacts.associate=(models) => {
    Contacts.belongsToMany(models.user, {
      as : "user",
      through : "users_contacts",
      foreignKey : "users_id",
      otherKey : "contacts_id",
      timestamps : false
    })
  }

  return Contacts;
}























/*
const {
  Model
} = require('sequelize');
const user = require('./User');

module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  contact.init({
 
    name: DataTypes.STRING(100),
    phone: DataTypes.STRING(50),
    email: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'contacts',
  });
  return contact;

  contact.associate=(models) => {
    contact.belongsToMany(models.user, {
      as : "user",
      through : "users_contacts",
      foreignKey : "users_id",
      otherKey : "contacts_id",
      timestamps : false
    })
  }
};*/