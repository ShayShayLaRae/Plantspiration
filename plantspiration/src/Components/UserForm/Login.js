import React, { Component } from 'react';
import './UserForm.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { updateUserInfo, setAuthenticated } from '../../ducks/reducer';
import { connect } from 'react-redux';
import store from '../../ducks/store';
import {withCookies} from 'react-cookie';
import Swal from 'sweetalert2';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (key, value) => {
        this.setState({[key]: value})
    }

    login = () => {
        const { email, password } = this.state
        const { cookies } = this.props;
        axios
            .post('/auth/login', { email, password })
            .then(res => {
                if(res.status >= 200 && res.status <= 299) {
                    store.dispatch(setAuthenticated(true, res.data.user))
                    cookies.set('currentuser',JSON.stringify(res.data.user))
                } else {
                    store.dispatch(setAuthenticated(false, {}))
                }
                this.props.updateUserInfo(res.data.user)
                Swal.fire(res.data.message)
                this.props.history.push('/my-plants')
            })
            .catch(err => {
                console.log('error', err);
                
                // Swal.fire(err.data.message)
            })
    }
    render() {
        return (
            <div className='loginBody'>
                <div className='loginCont'>
                    <input
                    onChange={e => this.handleChange('email', e.target.value)}
                    value={this.state.email}
                    placeholder='Email'
                    type='email'
                    />
                    <hr/>
                    <input
                    onChange={e => this.handleChange('password', e.target.value)}
                    value={this.state.password}
                    placeholder='Password'
                    type='password'
                    />
                    <hr/>
                    <Link to='/'>
                        <button onClick={this.login}>
                            Login
                        </button>
                    </Link>
                    <hr/>
                    <Link to='/register'>
                        <h3>New here? Click to Register!</h3>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withCookies(connect(null, {updateUserInfo})(Login))