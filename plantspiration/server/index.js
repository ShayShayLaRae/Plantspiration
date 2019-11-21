require ('dotenv').config();
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const {SERVER_PORT, CONNECTION_STRING} = process.env;
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//User Endpoints
app.post('/api/user', ctrl.addUser)
app.get('/api/user-list', ctrl.allUsers)
app.get('/api/user-list/:id', ctrl.aUser)
app.put('/api/user/:id', ctrl.editUser)
app.delete('/api/user/:id', ctrl.deleteUser)

//Plant Endpoints
app.post('/api/plant', ctrl.addPlant)
app.get('/api/plant-hoard', ctrl.allPlants)
app.get('/api/plant-hoard/:id', ctrl.aPlant)
app.put('/api/plant/:id', ctrl.editPlant)
app.delete('/api/plant/:id', ctrl.deletePlant)

massive(CONNECTION_STRING).then(databaseConnection => {
    app.set('db', databaseConnection)
    console.log('Database connected');

    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Plants are growing!`));
})