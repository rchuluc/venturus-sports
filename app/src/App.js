import React, { PureComponent } from 'react'
import './App.scss'
import NewUser from './Pages/NewUser/NewUser'
import Home from './Pages/Home/Home'
import { createPayload, validateForm } from './Utils/scripts'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

export default class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      newData: {}
    }
  }

  submitForm = async () => {
    if (await validateForm()) {
      const data = await createPayload()
      this.setState({
        newData: data
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router basename="/">
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/user" />} />
            <Route
              exact
              path="/user"
              render={() => <Home data={this.state.newData} />}
            />
            <Route
              path="/user/new"
              render={() => <NewUser action={this.submitForm} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}
