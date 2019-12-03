import React, {Component} from 'react';
import './UserForm.css';


export default class UserForm extends Component{
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            img: '',
            email: ''
        }
    }

    usernameChangeHandler(event) {
        this.setState({img: event.target.value})
    }
    passwordChangeHandler(event) {
        this.setState({password: event.target.value})
    }
    imgChangeHandler(event) {
        this.setState({img : event.target.value})
    }
    emailChangeHandler(event) {
        this.setState({email : event.target.value})
    }
    render() {
        const {username, password, img, email} = this.state;
        return(
            <div className='userFormBody'>
                <h3>Register</h3>
                <input
                value={username}
                placeholder='username'
                type='text'
                onChange={e => this.usernameChangeHandler(e)}
                />
                  <input
                value={password}
                placeholder='password'
                type='text'
                onChange={e => this.passwordChangeHandler(e)}
                />
                  <input
                value={img}
                placeholder='profile photo'
                type='text'
                onChange={e => this.imgChangeHandler(e)}
                />  <input
                value={email}
                placeholder='email'
                type='text'
                onChange={e => this.emailChangeHandler(e)}
                />
            </div>
        )
    }
}