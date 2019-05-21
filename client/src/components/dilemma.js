// import { Link } from "react-router-dom"
import React, { Component } from 'react'
import axios from 'axios'


//styled components or bootstrap or materialize
class Dilemma extends Component {
    state = {
        dilemma: {
            name: '',
            notesThoughts: ''
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }
    deleteDilemma = (e) => {
        e.preventDefault();
        axios.delete(`/dilemma/${this.props.id}`)
        .then(() => this.props.getDilemmas())
    }
 
    updateCreature = (e) => {
        e.preventDefault()
        axios.put(`/dilemma/${this.props.id}`, {
              name: this.state.dilemma.name,
              notesThoughts: this.state.dilemma.notesThoughts
          })
          .then(res => {
              this.setState({dilemma: res.data, isEditFormDisplayed: false})
          })
    }
render(){

    return (
        <div className="eachDilemma">
         <li>
       <h3>{this.props.name} </h3> 
       <h4>{this.props.notesThoughts}</h4>
        
        <a href="#">edit</a>
   
        <form>

            
        </form>
        <input onClick={this.deleteDilemma} type='submit' value='delete'/>
        </li>
        </div>
    )
    }

}
export default Dilemma;