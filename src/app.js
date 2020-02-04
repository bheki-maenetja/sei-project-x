import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ExternalLinks from './components/common/ExternalLinks'

import JobIndex from './components/jobs/JobIndex'
import PeepIndex from './components/people/PeepIndex'
import OrgIndex from './components/orgs/OrgIndex'

import ShowOrg from './components/orgs/OrgShow'

import Auth from './components/auth/Authenticate'

import 'bulma'
import './styles/main.scss'

const App = () => (
  <BrowserRouter>
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/jobs" component={JobIndex} />
      <Route path="/people" component={PeepIndex} />
      <Route path="/organisations/:id" component={ShowOrg} />
      <Route path="/organisations" component={OrgIndex} />
      <Route path="/external-links" component={ExternalLinks} />
      <Route path="/login" component={Auth} />
      <Route path="/register" component={Auth} />
    </Switch>
    </>
  </BrowserRouter>
)
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
