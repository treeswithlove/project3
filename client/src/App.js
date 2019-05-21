import React, { Component } from 'react'
import './App.css';
import DilemmaList from './components/dilemmaList'
import ViewDilemma from './components/viewDilemma'
import ChoicesList from './components/choicesList'
import ViewChoices from './components/viewChoices'
import Home from './components/home.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    const SingleDilemma = (props) => (<ViewDilemma {...props} />)
    const SingleChoice = (props) => (<ViewChoices {...props} />)
    return (
      <div>
     
      <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dilemma">Life Questions</Link></li>
            <li><Link to="/choices">Life Perspectives</Link></li>
          </ul>
        </nav>
      </div>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dilemma" component={DilemmaList} />
            <Route path="/dilemma/:dilemmaId" render={SingleDilemma} />
            <Route exact path="/choices" component={ChoicesList} />
            <Route exact path="/choices/:choicesId" render={SingleChoice} />
          </Switch>
        </div>

      </Router>
      </div>
      //router with exact path for links for the nav bar
    )
  }
}

export default App;
