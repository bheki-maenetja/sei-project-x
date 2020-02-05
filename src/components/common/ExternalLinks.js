import React from 'react'
import axios from 'axios'

class ExternalLinks extends React.Component {

  state= {
    displaySiteURL: null,
    displaySiteData: null
  }

  render() {
    console.log(this.state)
    return (
      <>
      <section className="section">
        <div className="container">
          <h1 className="title is-1 has-text-white">Explore More Places from the World of Crime</h1>
          <hr />
          <div className="columns is-multiline">
            <iframe className="column is-fullwidth" src="https://www.youtube.com/embed/RS3aHkkfuEI" style={{ height: '650px', width: '100%' }} SameSite="Secure"></iframe>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-fullwidth field has-addons">
                <div className="control">
                  <button className="button is-primary">Website Link</button>
                </div>
                <div className="control">
                  <button className="button is-info">Website Link</button>
                </div>
                <div className="control">
                  <button className="button is-danger">Website Link</button>
                </div>
                <div className="control">
                  <button className="button is-warning">Website Link</button>
                </div>
                <div className="control">
                  <button className="button is-dark">Website Link</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default ExternalLinks