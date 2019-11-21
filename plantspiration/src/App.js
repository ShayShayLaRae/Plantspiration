import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyPlants from './Components/MyPlants/MyPlants';
import Wishlist from './Components/Wishlist/Wishlist';
import EditPlant from './Components/EditPlant/EditPlant';
import EditUser from './Components/EditUser/EditUser';
import Footer from './Components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/my-plants' component={MyPlants} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/edit-plant' component={EditPlant} />
          <Route path='/user/edit' component={EditUser} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
