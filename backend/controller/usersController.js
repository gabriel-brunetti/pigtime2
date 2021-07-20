const { Users } = require('../models')
const { sequelize } = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
  index: async (req, res) => {
    const users = await Users.findAll()
    return res.json(users)
  },
  store: async (req, res) => {
    const {
      firstName,
      lastName,
      rg,
      cpf,
      gender,
      email,
      password,
      endereco,
      telephone1,
      telephone2,
      urlImg,
    } = req.body

    const checkUser = await Users.findOne({
      where: { email },
    })
    if (checkUser) return res.status(409).send('Usuário já cadastrado')

    const userCreated = await Users.create({
      firstName,
      lastName,
      rg,
      cpf,
      gender,
      email,
      password: bcrypt.hashSync(password, 10),
      endereco,
      telephone1,
      telephone2,
      urlImg,
    })
      .then((user) => user)
      .catch((err) => res.status(503).send('Serviço não disponível'))

    return res.json(userCreated)
  },
}
