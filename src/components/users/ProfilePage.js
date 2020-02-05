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
      const res = await axios.get('/api/users', {
        headers: {
          authorization: `Bearer ${Authorize.getToken()}`
        }
      })
      this.setState({ userInfo: res.data })
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!\n', err)
    }
  }

  render() {
    console.log(this.state)
    if (!this.state.userInfo) return null
    const { userInfo } = this.state
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-white">{userInfo.name}</h1>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src="https://i.imgur.com/JWUuCLf.jpg" alt="profile picture" />
              </figure>
            </div>
            <div className="column is-half">
              <h2 className="title is-3 has-text-white">Alias</h2>
              <h3 className="subtitle is-5 has-text-white">{userInfo.alias}</h3>
              <hr />
              <h2 className="title is-3 has-text-white">Handle</h2>
              <h3 className="subtitle is-5 has-text-white">{userInfo.handle}</h3>
              <hr />
              <h2 className="title is-3 has-text-white">Email</h2>
              <h3 className="subtitle is-5 has-text-white">{userInfo.email}</h3>
              <hr />
              {userInfo.business.length !== 0 && 
                <>
                <h2 className="title is-3 has-text-white">Business</h2>
                <h3 className="subtitle is-5 has-text-white">{userInfo.business.join(', ')}</h3>
                <hr />
                </>
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default ProfilePage