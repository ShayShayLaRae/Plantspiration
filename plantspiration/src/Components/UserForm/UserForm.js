import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
import './UserForm.css';
import axios from 'axios';
import {updateUserInfo} from '../../ducks/reducer';
import {connect} from 'react-redux';
import store from '../../ducks/store';
import Swal from 'sweetalert2';


export default class UserForm extends Component{
    constructor() {
        super();
        const {username, password, img, email} 
        = store.getState();
        this.state = {
            username: username,
            password: password,
            password1: password,
            password2: password,
            img: img,
            email: email
        }
    }

    usernameChangeHandler(event) {
        this.setState({username: event.target.value})
    }
    passwordChangeHandler(event) {
        this.setState({password: event.target.value})
    }
    password1ChangeHandler(event) {
        this.setState({password1: event.target.value})
    }
    password2ChangeHandler(event) {
        this.setState({password2: event.target.value})
    }
    imgChangeHandler(event) {
        this.setState({img : event.target.value})
    }
    emailChangeHandler(event) {
        this.setState({email : event.target.value})
    }

    // handleChange = (key, value) => {
    //     this.setState({
    //       [key]: value
    //     })
    //   }
    login = () => {
        const {email, password} = this.state
        axios
          .post('/auth/login', {email, password})
          .then(res => {
            this.props.updateUserInfo(res.data.user)
            Swal.fire(res.data.message)
            this.props.history.push('/dashboard')
          })
          .catch(err => {
            Swal.fire(err.response.data.message)
          })
      }
    
    register = () => {
        if (this.state.password1 === this.state.password2) {
          const {username, email, password1:password} = this.state
          axios
            .post('/auth/register', {username, email, password})
            .then(res => {
              console.log(res.data)
              this.props.updateUserInfo(res.data.user)
            })
            .catch(err => {
              console.log(err.response.data.message)
            })
        } else {
          console.log("passwords don't match")
        }
      }
    render() {
        const {username, password, img, email} = this.state;
        return(
            <div className='userFormBody'>
                <div className='userFormCont'>
                <h3>Register</h3>
                <input
                value={username}
                placeholder='username'
                type='text'
                onChange={e => this.usernameChangeHandler(e)}
                />
                <hr/>
                  <input
                value={password}
                placeholder='password'
                type='text'
                onChange={e => this.passwordChangeHandler(e)}
                />
                {/* <hr/>
                  <input
                value={password1}
                placeholder='password'
                type='text'
                onChange={e => this.password1ChangeHandler(e)}
                />
                <hr/>
                  <input
                value={password2}
                placeholder='password'
                type='text'
                onChange={e => this.password2ChangeHandler(e)}
                /> */}
                <hr/>
                  <input
                value={img}
                placeholder='profile photo'
                type='text'
                onChange={e => this.imgChangeHandler(e)}
                /> <hr/>
                 <input
                value={email}
                placeholder='email'
                type='text'
                onChange={e => this.emailChangeHandler(e)}
                />
                </div>
                
        {/* <input
          value={email}
          onChange={e => this.handleChange('email', e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={username}
          onChange={e => this.handleChange('username', e.target.value)}
          placeholder="username"
          type="text"
        />
        <input
          value={password1}
          onChange={e => this.handleChange('password1', e.target.value)}
          placeholder="Password"
          type="password"
        />
        <input
          value={password2}
          onChange={e => this.handleChange('password2', e.target.value)}
          placeholder="Retype password"
          type="password"
        />
        <button onClick={this.register}>Register</button>
        <Link to="/">
          <h4>Already have an account? Login here</h4>
        </Link> */}
            
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const {username, password, img, email} = reduxState
    return {username: username, password: password, img: img, email: email}
  }
  
connect(mapStateToProps, {updateUserInfo})(UserForm)