import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Redirect } from 'react-router'
import App from '../containers/App'
import Glossary from '../containers/Glossary'
import ManageUsers from '../containers/ManageUsers'
import ManageRoles from '../containers/ManageRoles'
import ManageSearch from '../containers/ManageSearch'
import Explore from '../containers/Explore'
import UserProfile from '../containers/UserProfile'
import { View } from 'zanata-ui'

export default class Root extends Component {
  render () {
    const username = window.config.user.username
    const {
      store,
      history
    } = this.props
    return (
      <Provider store={store}>
        <View>
          <Router history={history}>
            <Route component={App} >
              <Route path='explore' component={Explore} />
              <Route path='glossary' component={Glossary} />
              <Route path='manageusers' component={ManageUsers} />
              <Route path='manageroles' component={ManageRoles} />
              <Route path='managesearch' component={ManageSearch} />
              <Route path='profile/:username' component={UserProfile} />
              <Route path='project/:projectSlug/glossary'
                component={Glossary} />
              <Redirect from='profile' to={`profile/${username}`} />
              <Redirect from='/' to={`profile/${username}`} />
            </Route>
          </Router>
        </View>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}