const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {email, username, img, password} = req.body
    const found = await db.find_user([email])
    if (+found[0].count !== 0) {
      return res.status(409).send({message: 'Email already registered'})
    }
    const user_id = await db.add_user({username, email, img})
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    db.add_hash({user_id: user_id[0].user_id, hash})
    req.session.user = {user_id: user_id[0].user_id, email, username, img}
    res.status(201).send({message: 'Logged In', user: req.session.user})
  },
  login: async (req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    const found = await db.find_user([email])
    if (+found[0].count === 0) {
      return res.status(401).send({message: 'An account with that email does not exist'})
    }
    const foundUser = await db.find_hash([email])
    const {hash, user_id, username, img} = foundUser[0]
    const result = bcrypt.compareSync(password, hash)
    if (!result) {
      return res.status(401).send({message: 'Password incorrect'})
    }
    req.session.user = {user_id, email, username, img}
    res.status(200).send({message: 'Logged In', user: req.session.user})
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
  }
}