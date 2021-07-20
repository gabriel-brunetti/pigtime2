'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Services extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Services.init(
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

  // Services.associate = (models) => {
  //   Services.belongsTo(models.Users, {
  //     foreignKey: 'user_id',
  //     as: 'owner',
  //   })
  // }
  return Services
}
