import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserForm.css';
import axios from 'axios';
import { updateUserInfo } from '../../ducks/reducer';
import { connect } from 'react-redux';




class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      username: '',
      password1: '',
      password2: ''
    }
  }

  handleChange = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  register = () => {
    if (this.state.password1 === this.state.password2) {
      const { username, email, password1: password } = this.state
      axios
        .post('/auth/register', { username, email, password })
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
    const { email, username, password1, password2 } = this.state;
    return (
      <div className='registerBody'>
        <div className='registerCont'>
          <h3>Register</h3>
          <hr/>
        <input
          value={email}
          onChange={e => this.handleChange('email', e.target.value)}
          placeholder="Email"
          type="text"
        />
        <hr/>
        <input
          value={username}
          onChange={e => this.handleChange('username', e.target.value)}
          placeholder="Username"
          type="text"
        />
        <hr/>
        <input
          value={password1}
          onChange={e => this.handleChange('password1', e.target.value)}
          placeholder="Password"
          type="password"
        />
        <hr/>
        <input
          value={password2}
          onChange={e => this.handleChange('password2', e.target.value)}
          placeholder="Retype password"
          type="password"
        />
        <hr/>
        <Link to='/'>
        <button onClick={this.register}>Register</button>
        </Link>
        <Link to="/login">
          <h4>Already have an account? Login here!</h4>
        </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(reduxState) {
  const { email, username, password } = reduxState
  return { email: email, username: username, password: password }
}
const mapDispatchToProps = {
  updateUserInfo
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)