import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import MyPlants from './Components/MyPlants/MyPlants';
import WishList from './Components/Wishlist/Wishlist';
import PlantForm from './Components/PlantForm/PlantForm';
import UserForm from './Components/UserForm/UserForm';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/my-plants' component={MyPlants}/>
        <Route path='/wishlist' component={WishList}/>
        <Route path='/plant' component={PlantForm}/>
        <Route path='/user' component={UserForm}/>
        {/* <Route path='/chat' component={Chat}/> */}
    </Switch>

)