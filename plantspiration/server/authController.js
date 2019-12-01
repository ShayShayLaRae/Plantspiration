const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password, img, email} = req.body;
        const db = req.app.get('db');
        const result = await db.get_user([username]);
        const existingUser = result[0];
        if (existingUser) {
            return res.status(409).send('Username Taken Please choose another username');
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypts.hashSync(password, salt);
        const registerUser = await db.register_user([isAdmin, username, hash]);
        const user = registerUser[0];
        req.session.user = {isAdmin: user.is_admin, username: user.username, id: user.user_id};
        return res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const foundUser = await req.app.get('db').get_user([username]);
        const user = foundUser[0];
        if(!user) {
            return res.status(401).send('User not found. Please register as a new user before logging in.');
        }
        const isAuthenticated = bcrypt.compareSync(password, user.hash);
        if (!isAuthenticated) {
            return res.status(403).send('Incorrect password');
        }
        req.session.user = {isAdmin: user.is_admin, id: user.user_id, username: user.username};
        return res.send(req.session.user);
    },
    logout: async (req, res) => {
        req.session.destroy();
        return res.sendStatus(200);
    }

};