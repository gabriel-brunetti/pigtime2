'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'João',
        lastName: 'Fulano',
        rg: '55555555',
        cpf: '11111111-11',
        gender: 'Male',
        email: 'teste@email',
        password: '123456',
        endereco: 'test address',
        saldo: 5,
        telephone1: '1199999999',
        telephone2: '-',
        urlImg: '-',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {})
  },
}
