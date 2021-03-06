import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateUserInfo} from '../../ducks/reducer';
import axios from 'axios';
import Swal from 'sweetalert2';
import {withCookies} from 'react-cookie';

let Header = withCookies(class Header extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            username: '',
            user_id: '',
            img: '',
        }
    }
    //TODO Make this actually work instead of mock-up.
    // if (isAuthenticated = true) {
    //     Plantspiration, Login, Register
    // } else {
    //     Plantspiration, MyPlants, Wishlist, Logout
    // }

    logout = () => {
        let {cookies} = this.props;
        axios.post('/auth/logout').then(res => {
          Swal.fire(res.data.message)
          updateUserInfo({
            email: '',
            username: '',
            user_id: '',
            img: ''
          })
          cookies.remove('currentuser');
        })
      }
  
    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <div className='logo'>
                        <h1>PlantSpiration</h1>
                    </div>
                </Link>

                <nav>
                <div className='navBtns'>
                    <Link to='/my-plants'>
                        <button className='btn'>
                            My Plants
                        </button>
                    </Link>
                    <Link to='/wishlist'>
                        <button className='btn'>
                            Wishlist
                        </button>
                    </Link>
                    <Link to='/chat'>
                        <button className='btn'>
                            Chat
                        </button>
                    </Link>
                    <Link to='/login'>
                        <button className='btn'>
                        Login
                        </button>
                    </Link>
                    <Link to='/register'>
                        <button className='btn'>
                            Register
                        </button>
                    </Link>
                    <Link to='/'>
                        <button 
                        className='btn'
                        onClick={this.logout}>
                        Logout
                        </button>
                    </Link>
                </div>
                </nav>
            </div>
        )
    }
})
export default Header;
function mapStateToProps(reduxState) { return reduxState }
connect(mapStateToProps, {updateUserInfo})(Header)