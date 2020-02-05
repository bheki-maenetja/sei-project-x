import React from 'react'
import axios from 'axios'

import Authorize from '../../lib/auth'

class ProfilePage extends React.Component {

  state = {
    userInfo: null
  }

  async componentDidMount() {
    console.log('Mounting...')
    try {
      const res = await axios.get(`/api/users/${Authorize.getPayload().sub}`)
      this.setState({ userInfo: res.data })
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!\n', err)
    }
  }

  render() {
    console.log(this.state)
    if (!this.state.userInfo) return null
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{this.state.userInfo.username}</h1>
        </div>
      </section>
    )
  }
}

export default ProfilePage