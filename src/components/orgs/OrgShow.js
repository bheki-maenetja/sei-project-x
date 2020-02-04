import React from 'react'
import axios from 'axios'

class ShowOrg extends React.Component {

  state = {
    chosenOrg: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get(`/api/orgs/${this.props.match.params.id}`)
      this.setState({ chosenOrg: res.data })
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!', err)
    }
  }

  render() {
    if (!this.state.chosenOrg) return false
    const { chosenOrg } = this.state
    const { members } = this.state.chosenOrg
    return (
      <>
      <section className="section org-show">
        <div className="container">
          <h1 className="title is-1">{chosenOrg.name}</h1>
          <hr/>
          <div className="columns">
            <div className="column is-half is-fullwidth-mobile">
              <figure className="image is-fullheight">
                <img src={chosenOrg.imageURL} />
              </figure>
              <br />
              {members.length !== 0 &&
              <> 
              <h3 className="title is-3">Members</h3>
              <hr />
              <div className="columns is-multiline">
                {members.map(member => {
                  return (
                    <>
                    <div className="column is-one-third">
                      <div className="card">
                        <div className="card-image">
                          <figure className="image is-square">
                            <img src={member.imageURL} />
                          </figure>
                        </div>
                        <div className="card-content">
                          <h5 className="title is-5">{member.name}</h5>
                          <h6 className="subtitle is-6">{member.rank[0]}</h6>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })}
              </div>
              </>
              }
            </div>
            <div className="column is-half is-fullwidth-mobile">
              <h3 className="title is-3">Information</h3>
              <hr />
              <h4 className="title is-4">Type of Organisation</h4>
              <p>{chosenOrg.type}</p>
              <br />
              <h4 className="title is-4">Businesses</h4>
              <p>{chosenOrg.business.join(', ')}</p>
              <br />
              <h4 className="title is-4">Countries of Operation</h4>
              <p>{chosenOrg.countries_of_operation.join(', ')}</p>
              <br />
              <button className="button is-warning">Join</button>
            </div>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default ShowOrg