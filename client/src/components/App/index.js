import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'


import Main from 'components/Main'
import Completed from 'components/Completed'
import Active from 'components/Active'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <h1>Todo App</h1>
          {/* Layout goes here */}
          <Route exact path="/" component={Main}/>
          <Route path="/:visibility" component={Main}/>
        </div>
      </Router>
    )
  }
}

export default App
