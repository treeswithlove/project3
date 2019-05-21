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
    //   this.state.dilemma 
      name: this.state.dilemma.name,
      notesThoughts: this.state.dilemma.notesThoughts
      })
      console.log("totes biiitch!")
        // .then(res => {
        //     this.setState({Dilemma: res.data, isEditFormDisplayed: false})
        // })
  }

  render() {
    if(this.state.redirectToHome) {
        return (<Redirect to="/" />)
    }

    return (
      <div>
        <Link to="/">Back to Dilemmas Home</Link>
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
                            placeholder={this.state.dilemma.name}
                        />
                    </div>
                    <div>
                        <label htmlFor="notesThoughts">notesThoughts</label>
                        <textarea
                            id="notesThoughts"
                            name="notesThoughts"
                            onChange={this.handleChange}
                            placeholder={this.state.dilemma.notesThoughts}
                        />
                    </div>
                    <input type="submit" value="submit" />
                </form>
                : <div>
                    <div>
                        Name: {this.state.dilemma.name}

                        
                    </div>
                    <div>
                        notesThoughts: {this.state.dilemma.notesThoughts}
                    </div>
                    <button onClick={this.props.deleteDilemma}>Delete</button>
                </div>
        }
      </div>
    );
  }
}

export default SingleDilemma;