

module.exports = {

    allPlants(req, res) {
        const db = req.app.get('db')
        db.get_plants()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },

    getMyPlants(req,res) {
        const db = req.app.get('db')
        db.get_MyPlants()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    getWishlist(req,res) {
        const db = req.app.get('db')
        db.get_Wishlist()
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
            console.log(err);
        })
    },
    getUrbanJungle(req, res) {
        const db = req.app.get('db')
        db.get_plant_room()
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
    addPlant(req, res) {
        const db = req.app.get('db')
        const {
            img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list
        } = req.body
        db.add_plant({
            img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list
        })
        .then(result => {
            res.status(200).send(result)
        }).catch(err => {
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
    editPlant (req, res) {
        const {
            img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list
        } = req.body

        const db = req.app.get('db');
        const {plant_id} = req.params;
        
        
        db.edit_plant({
            plant_id, img_url, common_name, scientific_name, propagation_type, hardiness_zone, soil_type, sun, acquired, current_list})
            .then(plant => {
                res.status(200).send(plant)
            }).catch(err => {
                console.log(err);
            })
    }
}