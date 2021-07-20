'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define(
    'Services',
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      address: DataTypes.STRING,
      startHour: DataTypes.DATE,
      finishHour: DataTypes.DATE,
      status: DataTypes.BOOLEAN,
      payment: DataTypes.INTEGER,
      review: { type: DataTypes.INTEGER, allowNull: true },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
      provider_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Service',
    }
  )

  Service.associate = (models) => {
    Service.belongsTo(models.Users, {
      foreignKey: 'user_id',
      as: 'owner',
    })
  }
  return Service
}
