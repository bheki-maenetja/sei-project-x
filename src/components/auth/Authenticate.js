import React from 'react'
import axios from 'axios'

import Authorize from '../../lib/auth'

class Auth extends React.Component {

  state = {
    registerData: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {},
    error: '',
    loginData: {
      email: '',
      password: ''
    }
  }

  changeRegister = ({ target: { name, value } }) => {
    this.setState({ registerData: { ...this.state.registerData, [name]: value }, errors: { ...this.state.errors, [name]: '' } })
  }

  changeLogin = ({ target: { name, value } }) => {
    this.setState({ loginData: { ...this.state.loginData, [name]: value }, error: '' })
  }

  registerUser = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/register', this.state.registerData)
      res.status === 201 ? console.log('Registered') : console.log(res.state.data.message)
      this.props.history.push('/login')
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!\n', err)
      this.setState({ errors: err })
    }
  }

  loginUser = async e => {
    e.preventDefault()

    try {
      const res = await axios.post('/api/login', this.state.loginData)
      Authorize.setToken(res.data.token)
      this.props.history.push('/')
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!\n', err)
    }
  }

  render() {
    console.log(this.state, this.props)
    return (
      <>
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {this.props.location.pathname === '/register' && 
              <form className="column is-half is-offset-one-quarter" onSubmit={this.registerUser}>
                <h2 className="title is-2">Register</h2>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input type="text" className="input" name="username" placeholder="Username" onChange={this.changeRegister} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input type="text" className="input" name="email" placeholder="Emaill Address" onChange={this.changeRegister} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" className="input" name="password" placeholder="Password" onChange={this.changeRegister} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input type="password" className="input" name="passwordConfirmation" placeholder="Confirm Password" onChange={this.changeRegister} required />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-warning is-fullwidth">Submit</button>
                  </div>
                </div>
              </form>
            }
            {this.props.location.pathname === '/login' &&
              <form className="column is-half is-offset-one-quarter" onSubmit={this.loginUser}>
                <h2 className="title is-2">Login</h2>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input type="text" name="email" className="input" placeholder="Email" onChange={this.changeLogin} required />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input type="password" name="password" className="input" placeholder="Password" onChange={this.changeLogin} required />
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <button className="button is-info is-fullwidth">Login</button>
                  </div>
                </div>
              </form>
            }
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default Auth