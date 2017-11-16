import React from 'react'
import { Router, Route } from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Router Redux Props</h1>
        <Router>
          <Route path="/" component={Home} />
          <Route paht="/about" component={About} />
          <Route path="/fairygodmothers/:name" component={Pumpkins} />
        </Router>
      </div>
    )
  }
}
