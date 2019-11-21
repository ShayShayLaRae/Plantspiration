import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


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

                    <Link to='/my-plants'>
                        <button>
                            My Plants
                    </button>
                    </Link>
                    <Link to='/wishlist'>
                        <button>
                            Wishlist
                    </button>
                    </Link>

                    <button>
                        *
                </button>

                    <button>
                        Login
                </button>

                    <button>
                        Logout
                </button>
                </nav>
            </div>
        )
    }
}