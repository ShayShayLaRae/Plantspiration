import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import {connect} from 'react-redux';
// import {updateUserInfo} from '../../ducks/reducer';
// import axios from 'axios';
// import Swal from 'sweetalert2';


export default class Header extends Component {
  
    render() {
        return (
            <div className='header'>
                <Link to='/'>
                    <div className='logo'>
                        <strong>PlantSpiration</strong>
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

                    {/* <button className='btn'>
                        *
                    </button> */}
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
                    {/* <Link to='/'>
                        <button className='btn'>
                        Logout
                        </button>
                    </Link> */}
                </div>
                </nav>
            </div>
        )
    }
}