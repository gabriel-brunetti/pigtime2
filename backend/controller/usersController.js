const { Users } = require('../models')
const { sequelize } = require('../models')
const bcrypt = require('bcrypt')

module.exports = {
  index: async (req, res) => {
    const users = await Users.findAll()
    return res.json(users)
  },
  read: async (req, res) => {
    const { id } = req.params
    const user = await Users.findOne({ where: { id } })
    if (user) {
      return res.json(user)
    } else {
      return res.send('usuário não encontrado')
    }
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
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((user) => user)
      .catch((err) => res.status(503).send('Serviço não disponível'))

    return res.json(userCreated)
  },

  edit: async (req, res) => {
    const { id } = req.params
    const user = await Users.findOne({
      where: {
        id,
      },
    })

    return res.json(user)
  },
  update: async (req, res) => {
    const { id } = req.params
    const user = await Users.update({ ...req.body }, { where: { id } })

    return res.json(user)
  },
  delete: async (req, res) => {
    const { id } = req.params
    await Users.destroy({ where: { id } })

    return res.json('usuário deletado')
  },
  login: async (req, res) => {
    const { email, password } = req.body
    const user = await Users.findOne({
      where: {
        email: email,
      },
    }).then((u) => u)
    console.log(user)
    // checking if user exists
    if (!user) {
      return res.send('Usuário e/ou senha inválidos')
    }
    // comparing passwords
    if (!bcrypt.compareSync(password, user.password)) {
      return res.send('Usuário e/ou senha inválidos')
    }
    // login the user
    req.session.user = user
    console.log(user.id)
    return res.send('Usuário logado')
  },
}
