import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyPlants from './Components/MyPlants/MyPlants';
import Wishlist from './Components/Wishlist/Wishlist';
import PlantForm from './Components/PlantForm/PlantForm';
import UserForm from './Components/UserForm/UserForm';
import Footer from './Components/Footer/Footer';
import { Switch, Route } from 'react-router-dom';


export default class App extends Component {
  render(){

  
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/my-plants' component={MyPlants} />
          <Route path='/wishlist' component={Wishlist} />
          <Route path='/plant/' component={PlantForm} />
          <Route path='/user/' component={UserForm} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
  }
}

