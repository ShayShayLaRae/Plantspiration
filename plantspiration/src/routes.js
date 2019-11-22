import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import MyPlants from './Components/MyPlants/MyPlants';
import WishList from './Components/Wishlist/Wishlist';
import EditPlant from './Components/EditPlant/EditPlant';
import EditUser from './Components/EditUser/EditUser';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/my-plants' component={MyPlants}/>
        <Route path='/wishlist' component={WishList}/>
        <Route path='/edit-plant' component={EditPlant}/>
        <Route path='/user/edit' component={EditUser}/>
        {/* <Route path='/chat' component={Chat}/> */}
    </Switch>

)