import React from 'react'
import axios from 'axios'

class ExternalLinks extends React.Component {

  state = {
    currentVid: 'https://www.youtube.com/embed/1Expe7hf6MU'
  }

  changeVid = (e) => {
    this.setState({ currentVid: e.target.name })
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
            <iframe className="column is-fullwidth" src={this.state.currentVid} style={{ height: '650px', width: '100%' }} SameSite="Secure"></iframe>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-fullwidth field has-addons">
                <div className="control">
                  <button className="button is-primary" name="https://www.youtube.com/embed/1Expe7hf6MU" onClick={this.changeVid}>The Irishman</button>
                </div>
                <div className="control">
                  <button className="button is-info" name="https://www.youtube.com/embed/zE7kEpabZ-U" onClick={this.changeVid}>Casino</button>
                </div>
                <div className="control">
                  <button className="button is-danger" name="https://www.youtube.com/embed/E84VqqCPI7w" onClick={this.changeVid}>Goodfellas</button>
                </div>
                <div className="control">
                  <button className="button is-warning" name="https://www.youtube.com/embed/iszwuX1AK6A" onClick={this.changeVid}>The Wolf of Wall Street</button>
                </div>
                <div className="control">
                  <button className="button is-dark" name="https://www.youtube.com/embed/B34sntIgI4g" onClick={this.changeVid}>The Godfather</button>
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