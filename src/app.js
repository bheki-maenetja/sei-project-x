import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import ExternalLinks from './components/common/ExternalLinks'
import ErrorPage from './components/common/ErrorPage'

import JobIndex from './components/jobs/JobIndex'
import PeepIndex from './components/people/PeepIndex'
import OrgIndex from './components/orgs/OrgIndex'

import ShowOrg from './components/orgs/OrgShow'

import Auth from './components/auth/Authenticate'
import Authorize from './lib/auth'

import ProfilePage from './components/users/ProfilePage'

import 'bulma'
import './styles/main.scss'
import '@fortawesome/fontawesome-free'

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
      <Route path="/profile" component={ProfilePage} />
      <Route path="/*" component={ErrorPage} />
    </Switch>
    </>
  </BrowserRouter>
)
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
