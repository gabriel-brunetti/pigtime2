'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users',
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      rg: DataTypes.STRING,
      cpf: DataTypes.STRING,
      gender: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      endereco: DataTypes.STRING,
      saldo: { type: DataTypes.INTEGER, defaultValue: 5 },
      telephone1: { type: DataTypes.STRING, allowNull: true },
      telephone2: { type: DataTypes.STRING, allowNull: true },
      urlImg: { type: DataTypes.STRING, allowNull: true },
    },
    {
      sequelize,
      modelName: 'User',
    }
  )

  // User.associate = (models) => {
  //   User.hasMany(models.Services, {
  //     foreignKey: 'user_id',
  //   })
  // }
  return User
}
