// const bcrypt = require('bcryptjs');

// module.exports = {
//     register: async (req, res) => {
//         const {username, password, img, email} = req.body;
//         const db = req.app.get('db');
//         const result = await db.get_user([username]);
//         const existingUser = result[0];
//         if (existingUser) {
//             return res.status(409).send('Username Taken Please choose another username');
//         }
//         const salt = bcrypt.genSaltSync(10);
//         const hash = bcrypts.hashSync(password, salt);
//         const registerUser = await db.register_user([isAdmin, username, hash]);
//         const user = registerUser[0];
//         req.session.user = {isAdmin: user.is_admin, username: user.username, id: user.user_id};
//         return res.status(201).send(req.session.user);
//     },
//     login: async (req, res) => {
//         const {username, password} = req.body;
//         const foundUser = await req.app.get('db').get_user([username]);
//         const user = foundUser[0];
//         if(!user) {
//             return res.status(401).send('User not found. Please register as a new user before logging in.');
//         }
//         const isAuthenticated = bcrypt.compareSync(password, user.hash);
//         if (!isAuthenticated) {
//             return res.status(403).send('Incorrect password');
//         }
//         req.session.user = {isAdmin: user.is_admin, id: user.user_id, username: user.username};
//         return res.send(req.session.user);
//     },
//     logout: async (req, res) => {
//         req.session.destroy();
//         return res.sendStatus(200);
//     }

// };
const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')
    const {email, password, username} = req.body
    const found = await db.find_user([email])
    if (+found[0].count !== 0) {
      return res.status(409).send({message: 'Email already registered'})
    }
    const user_id = await db.add_user({username, email, img: `https://localhost:6727/user/${username}`})
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    db.add_hash({user_id: user_id[0].user_id, hash})
    req.session.user = {user_id: user_id[0].user_id, email, username, profile_img: `https://localhost:6727/user/${username}`}
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