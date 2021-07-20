const { response } = require('express')
const { Services, Users } = require('../models')
const { sequelize } = require('../models')

module.exports = {
  index: async (req, res) => {
    const services = await Services.findAll({ where: { status: true } })
    return res.json(services)
  },
  read: async (req, res) => {
    const { id } = req.params
    const service = await Services.findOne({ where: { id } })

    if (service) {
      return res.json(service)
    } else {
      return res.json('serviço não encontrado')
    }
  },
  store: async (req, res) => {
    const user_id = req.session.user.id
    const { name, description, address, startHour, finishHour, payment } =
      req.body

    const serviceCreated = await Services.create({
      name,
      description,
      address,
      startHour,
      finishHour,
      status: true,
      payment,
      review: null,
      user_id,
      provider_id: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((service) => service)
      .catch((err) => res.status(503).send('Serviço não disponível'))

    return res.json(serviceCreated)
  },
  update: async (req, res) => {
    const { id } = req.params
    const service = Services.update({ ...req.body }, { where: { id } })

    return res.json(service)
  },
  delete: async (req, res) => {
    const { id } = req.params
    await Services.destroy({ where: { id } })

    return res.json('serviço deletado')
  },
}
