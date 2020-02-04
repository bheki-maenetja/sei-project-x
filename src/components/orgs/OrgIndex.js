import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class OrgIndex extends React.Component {

  state = {
    orgs: null,
    searchResults: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/orgs')
      this.setState({ orgs: res.data, searchResults: res.data })
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!', err)
    }
  }

  searchOrg = (e) => {
    const searchResults = this.state.orgs.filter(org => org.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ searchResults })
  }

  render() {
    if (!this.state.orgs) return false
    const { searchResults } = this.state
    return (
      <>
      <section className="section">
        <div className="container">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input type="text" className="input" placeholder="Search for criminal organisations" onChange={this.searchOrg} />
              </div>
              <div className="control">
                <button className="button is-primary">Search</button>
              </div>
            </div>
          </form>
          <br />
          <div className="columns is-multiline">
            {searchResults.map(org => {
              return (
                <>
                <div className="column is-one-quarter-desktop is-one-third-tablet is-one-half-mobile">
                  <Link to={`/organisations/${org._id}`}>
                    <div className="card">
                      <div className="card-image">
                        <figure className="image is-square">
                          <img src={org.imageURL} />
                        </figure>
                      </div>
                      <div className="card-content">
                        <h5 className="title is-5">{org.name}</h5>
                      </div>
                    </div>
                  </Link>
                </div>
                </>
              )
            })}
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default OrgIndex