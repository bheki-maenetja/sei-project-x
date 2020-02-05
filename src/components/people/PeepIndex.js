import React from 'react'
import axios from 'axios'

class PeepIndex extends React.Component {

  state = {
    people: null,
    currentPeep: null,
    searchResults: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/people')
      this.setState({ people: res.data, searchResults: res.data })
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!\n', err)
    }
  }

  viewPeep = (e) => {
    const chosenPeep = this.state.people.find(peep => peep._id === e.target.value)
    this.setState({ currentPeep: chosenPeep })
  }

  clearModal = () => {
    this.setState({ currentPeep: null })
  }

  searchPeep = (e) => {
    const searchString = e.target.value.toLowerCase()
    const searchResults = this.state.people.filter(peep => peep.name.toLowerCase().includes(searchString) || peep.alias.toLowerCase().includes(searchString))
    this.setState({ searchResults })
  }

  render() {
    if (!this.state.people) return false
    const { searchResults, currentPeep } = this.state
    return (
      <section className="section">
        <div className="container">
          {!this.state.currentPeep &&
          <> 
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input type="text" className="input" placeholder="Search for members of the mobster community" onChange={this.searchPeep} />
              </div>
              <div className="control">
                <button className="button is-success">Search</button>
              </div>
            </div>
          </form>
          <br />
          
          <div className="columns is-multiline">
            {searchResults.map(peep => {
              return (
                <>
                <div className="column is-one-quarter-desktop is-one-third-tablet is-one-half-mobile">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={peep.imageURL} />
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-5">{peep.name}</h5>
                      <h6 className="subtitle is-6">{peep.alias}</h6>
                      <button className="button is-primary" value={peep._id} onClick={this.viewPeep}>View Profile</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })}
          </div>
          </>
          }
          {this.state.currentPeep && 
            <div className="modal is-active">
              <div className="modal-background" onClick={this.clearModal}></div>
              <div className="modal-card">
                <div className="modal-card-head">
                  <figure className="image is-fullwidth">
                    <img src={currentPeep.imageURL} />
                  </figure>
                </div>
                <div className="modal-card-body">
                  <h1 className="modal-card-title is-1">{currentPeep.name} ({currentPeep.alias})</h1>
                  <h2 className="modal-card-subtitle is-1">@{currentPeep.handle}</h2>
                  <hr />
                  <p><strong>Gender:</strong> <span>{currentPeep.gender}</span></p>
                  <p><strong>Organisation:</strong> <span>{currentPeep.affiliations.name}</span></p>
                  <p><strong>Rank:</strong> <span>{currentPeep.rank[0]}</span></p>
                  <p><strong>Business:</strong> <span>{currentPeep.business.join(', ')}</span></p>
                </div>
                <div className="modal-card-foot">
                  <button className="button modal-card-title is-info">Follow</button>
                  <button className="button modal-card-title is-danger" onClick={this.clearModal}>Close</button>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
    )
  }
}

export default PeepIndex