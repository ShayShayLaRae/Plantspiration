import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import routes from './routes';
import Footer from './Components/Footer/Footer';
import store from './ducks/store';
import { setAuthenticated } from './ducks/reducer';
import { withCookies } from 'react-cookie';

export default withCookies(class App extends Component {

  constructor(){
    super();
    // this.checkHasAuth();

    // console.log('checkHasAuth', cookies);
  }

  componentWillMount(){
    console.log('component did mount');
    let { cookies } = this.props;
    let currentUser = cookies.get('currentuser');
    if(currentUser){
      store.dispatch(setAuthenticated(true, currentUser));
    }
  }

  // checkHasAuth(){
  //   let { cookies } = this.props;
  //   let currentUser = cookies.get('currentuser');
  //   if(currentUser){
  //     store.dispatch(setAuthenticated(true, currentUser));
  //   }
  // }

  render(){
 

  return (
    <div>
        <Header />
          {routes}
        <Footer />
    </div>
  );
  }
})

// export default withCookies(App);

