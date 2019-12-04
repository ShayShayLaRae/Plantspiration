require ('dotenv').config();
const express = require('express');
const session = require('express-session');
const ctrl = require('./controller');
const massive = require('massive');
const authCtrl = require('./authController');
// const auth = require('./authMiddleware');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;
const cors = require('cors');

const app = express();
app.use(express.json()); 
app.use(cors());

//Auth Controller
app.post('/auth/register', authCtrl.register);
app.post('/auth/login', authCtrl.login);
app.get('/auth/logout', authCtrl.logout);


//Plant Endpoints
app.post('/api/plant', ctrl.addPlant)
app.get('/api/plants', ctrl.allPlants)
app.get('/api/plants/myplants', ctrl.getMyPlants)
app.get('/api/plants/wishlist', ctrl.getWishlist)
app.get('/api/plants/:plant_id', ctrl.aPlant)
app.put('/api/plant/:plant_id', ctrl.editPlant)
app.delete('/api/plant/:plant_id', ctrl.deletePlant)

//Urban Jungle
app.get('/api/urbanJungle', ctrl.getUrbanJungle)


massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    app.use(
        session({
            resave: true,
            saveUninitialized: false,
            secret: SESSION_SECRET
        })
    );
    console.log('Database connected');

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Plants are growing!`));
})