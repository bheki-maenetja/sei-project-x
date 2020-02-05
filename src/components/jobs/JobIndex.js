import React from 'react'
import axios from 'axios'

class JobIndex extends React.Component {

  state = {
    jobs: null,
    displayModal: false,
    currentJob: null,
    searchResults: null
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/jobs')
      this.setState({ jobs: res.data, searchResults: res.data })
    } catch (err) {
      console.log('SOMETHING IS VERY WRONG!!!\n', err)
    }
  }

  toggleModal = () => {
    this.setState({ displayModal: !this.state.displayModal })
  }

  viewJob = (e) => {
    const chosenJob = this.state.jobs.find(job => job._id === e.target.value)
    this.setState({ displayModal: true, currentJob: chosenJob })
  }

  clearModal = () => {
    this.setState({ currentJob: null, displayModal: false })
  }

  searchJob = (e) => {
    const searchResults = this.state.jobs.filter(job => job.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({ searchResults })
  }

  render() {
    if (!this.state.jobs) return false
    const { currentJob } = this.state
    return (
      <>
      <section className="section">
        <div className="container">
          {!this.state.displayModal && 
            <>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input className="input" type="text" placeholder="Search for jobs" onChange={this.searchJob} />
                </div>
                <div className="control">
                  <button className="button is-success">Search</button>
                </div>
              </div>
            </form>
            <br />
            <div className="columns is-multiline">
              {this.state.searchResults.map(job => {
                return (
                <>
                <div className="column is-one-quarter-desktop is-one-third-tablet is-one-half-mobile">      
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-square">
                        <img src={job.imageURL} alt={job.name}/>
                      </figure>
                    </div>
                    <div className="card-content">
                      <h5 className="title is-5">{job.name}</h5>
                      <h6 className="subtitle is-6">{job.type}</h6>
                      <button className="button is-info" value={job._id} onClick={this.viewJob}>More Info</button>
                    </div>
                  </div> 
                </div>
                </>
                )
              })}
            </div>
            </>
          }
          {this.state.displayModal && 
            <div className="modal is-active">
              <div className="modal-background" onClick={this.clearModal}></div>
              <div className="modal-card">
                <div className="modal-card-head">
                  <h1 className="modal-card-title is-4">{currentJob.name}</h1>
                  <button className="delete" onClick={this.clearModal}></button>
                </div>
                <div className="modal-card-body">
                  <p><strong>Employer:</strong> <span>{currentJob.issued_by.name} ({currentJob.issued_by.alias})</span></p>
                  <p><strong>What you need to do:</strong> <span>{currentJob.description}</span></p>
                  <p><strong>Terms of the Deal:</strong> <span>{currentJob.terms_of_contract}</span></p>
                </div>
                <div className="modal-card-foot">
                  <p className="modal-card-title">Value: $<span>{currentJob.value}</span></p>
                  <button className="button is-danger">Apply</button>
                </div>
              </div>
            </div>
          }
        </div>
      </section>
      </>
    )
  }
}


export default JobIndex