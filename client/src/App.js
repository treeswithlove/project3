import React, { Component } from 'react'
import './App.css';
import DilemmaList from './components/dilemmaList'
import ViewDilemma from './components/viewDilemma'
import ViewChoices from './components/viewChoices'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    const SingleDilemma = (props) => (<ViewDilemma {...props} />)
    const SingleChoice = (props) => (<ViewChoices {...props} />)
    return (
      <Router>

        <div className="App">
          <Switch>
            <Route exact path="/" component={DilemmaList} />
            <Route path="/dilemma/:dilemmaId" render={SingleDilemma} />
            <Route exact path="/dilemma/:dilemmaId/choices/:choicesId" render={SingleChoice} />
          </Switch>
        </div>

      </Router>
      //router with exact path for links for the nav bar
    )
  }
}

export default App;
