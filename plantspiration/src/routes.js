import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import MyPlants from './Components/MyPlants/MyPlants';
import WishList from './Components/Wishlist/Wishlist';
import PlantForm from './Components/PlantForm/PlantForm';
import Register from './Components/UserForm/Register';
import Login from './Components/UserForm/Login';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/my-plants' component={MyPlants}/>
        <Route path='/wishlist' component={WishList}/>
        <Route path='/plant' component={PlantForm}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
        {/* <Route path='/chat' component={Chat}/> */}
    </Switch>

)