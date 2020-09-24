'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users_contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      users_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references : {model: {tableName: "users"}, key: "id"}
      },
      contacts_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {model: {tableName: "contacts"}, key: "id"}
      },
      favorite: {
        type: Sequelize.BOOLEAN
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users_contacts');
  }
};