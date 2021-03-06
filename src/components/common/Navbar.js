import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import Authorize from '../../lib/auth'

class Navbar extends React.Component {
  state = { navbarOpen: false }

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  logout = () => {
    Authorize.logout()
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <>
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item nav-logo" to="/"></Link>
            <a className={`navbar-burger ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar}>
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/jobs">Jobs</Link>
              <Link className="navbar-item" to="/people">People</Link>
              <Link className="navbar-item" to="/organisations">Organisations</Link>
              <Link className="navbar-item" to="/external-links">External Links</Link>
              {!Authorize.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
              {!Authorize.isAuthenticated() && <Link className="navbar-item" to="/register">Register</Link>}
              {Authorize.isAuthenticated() && <Link className="navbar-item" to="/profile">Profile</Link>}
              {Authorize.isAuthenticated() && <Link className="navbar-item" onClick={this.logout} to="/">Logout</Link>}
            </div>
          </div>
        </div>
      </nav>
      </>
    )
  }
}

export default withRouter(Navbar)
