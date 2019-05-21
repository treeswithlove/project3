import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class SingleDilemma extends Component {
  state = {
      dilemma: {
          name: '',
          notesThoughts: ''
      },
      redirectToHome: false,
      isEditFormDisplayed: false
  }

  componentDidMount = () => {
      axios.get(`/dilemma/${this.props.match.params.dilemmaId}`).then(res => {
          this.setState({dilemma: res.data.dilemma})
      })
  }

  toggleEditForm = () => {
      this.setState((state, props) => {
          return {isEditFormDisplayed: !state.isEditFormDisplayed}
      })
  }

  handleChange = (e) => {
      const cloneDilemma = {...this.state.dilemma}
      cloneDilemma[e.target.name] = e.target.value
      console.log(e.target.name)
      this.setState({dilemma: cloneDilemma})
  }

  updateDilemma = (e) => {
      e.preventDefault()
      console.log(this.state.dilemma)
      axios.put(`/dilemma/${this.props.match.params.dilemmaId}`, {
      name: this.state.dilemma.name,
      notesThoughts: this.state.dilemma.notesThoughts
      })
        .then(() => {
            this.setState({isEditFormDisplayed: false})
        })
  }

  deleteDilemma = (e) => {
    e.preventDefault();
    axios.delete(`/dilemma/${this.props.match.params.dilemmaId}`)
    .then(() => {

        this.setState((state, props) => {
            return {redirectToHome: !state.redirectToHome}
        })
    })
}

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/dilemma" />)
    }

    return (
      <div>
        <h1>Single Dilemma</h1>
        <button onClick={this.toggleEditForm}>Edit</button>
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updateDilemma}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.dilemma.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="notesThoughts">notesThoughts</label>
                        <textarea
                            id="notesThoughts"
                            name="notesThoughts"
                            onChange={this.handleChange}
                            value={this.state.dilemma.notesThoughts}
                        />
                    </div>
                    <input type="submit" value="submit" />
                    <button onClick={this.deleteDilemma}>Delete</button>

                </form>
                : <div>
                    <div>
                        Name: {this.state.dilemma.name}

                        
                    </div>
                    <div>
                        notesThoughts: {this.state.dilemma.notesThoughts}
                    </div>
                </div>
        }
         <Link to="/dilemma">Back to Life Questions Home</Link>
      </div>
    );
  }
}

export default SingleDilemma;