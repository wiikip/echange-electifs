'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Echanges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idSourceElectif: {
        type: Sequelize.INTEGER
      },
      idWantedElectif: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      idSlot: {
        type: Sequelize.INTEGER
      },
      idAuth: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Echanges');
  }
};
