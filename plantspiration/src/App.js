import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';
import Footer from './Components/Footer/Footer';


export default class App extends Component {
  render(){
    
  return (
    <div>
      <Header />
        {routes}
      <Footer />
    </div>
  );
  }
}

