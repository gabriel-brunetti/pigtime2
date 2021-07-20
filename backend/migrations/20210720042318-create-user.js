'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      rg: {
        type: Sequelize.STRING,
      },
      cpf: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      saldo: {
        type: Sequelize.INTEGER,
      },
      telephone1: {
        type: Sequelize.STRING,
      },
      telephone2: {
        type: Sequelize.STRING,
      },
      urlImg: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users')
  },
}
