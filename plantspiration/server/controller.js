

module.exports = {
   allUsers(req, res) {
        const db = req.app.get('db')
        db.get_users()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    allPlants(req, res) {
        const db = req.app.get('db')
        db.get_plants()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    aUser(req, res) {
        const db = req.app.get('db')
        db.get_user()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    aPlant(req, res) {
        const db = req.app.get('db')
        db.get_plant()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    

    addUser(req, res) {
        const db = req.app.get('db')
        const {username, password, img, email} = req.body
        db.add_user({username, password, img, email})
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    addPlant(req, res) {
        const db = req.app.get('db')
        const {
            img_url, common_name, scientific_name, propagation_type, soil_type, sun, acquired, current_list
        } = req.body
        db.add_plant({
            img_url, common_name, scientific_name, propagation_type, soil_type, sun, acquired, current_list
        })
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    deleteUser(req, res) {
        const db = req.app.get('db')
        db.delete_user(req.params.user_id)
        .then(result => {
            res.status(200).send(result)
        })
        .catch(err => {
            console.log(err);
        })
    },
    deletePlant(req, res) {
        const db = req.app.get('db')
        db.delete_plant(req.params.plant_id)
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    editUser (req, res) {
        const {username, password, img, email} = req.body
        const db = req.app.get ('db');
        const {user_id} = req.params;
        db.edit_product({user_id, username, password, img, email})
        .then(user => {
            res.status(200).send(user)
        }).catch(err => {
            console.log(err);
        })
    },
    editPlant (req, res) {
        const {
            img_url, common_name, scientific_name, propagation_type, soil_type, sun, acquired, current_list
        } = req.body
        const db = req.app.get('db');
        const {plant_id} = req.params;
        db.edit_plant({
            plant_id, img_url, common_name, scientific_name, propagation_type, soil_type, sun, acquired, current_list})
            .then(plant => {
                res.status(200).send(plant)
            }).catch(err => {
                console.log(err);
            })
    }
}