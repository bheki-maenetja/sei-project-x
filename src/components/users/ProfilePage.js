import React from 'react'
import Authorize from '../../lib/auth'

class ProfilePage extends React.Component {

  render() {
    console.log(Authorize.getPayload().sub)
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">The User&apos;s Profile Page</h1>
        </div>
      </section>
    )
  }
}

export default ProfilePage