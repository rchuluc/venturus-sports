import React from 'react'
import './App.scss'
import NewUser from './Pages/NewUser/NewUser'
import Home from './Pages/Home/Home'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router basename="/">
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/user" />} />
          <Route exact path="/user" component={Home} />
          <Route path="/user/new" component={NewUser} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
