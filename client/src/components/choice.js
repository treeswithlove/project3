// import { Link } from "react-router-dom"
import React, { Component } from 'react'

//styled components or bootstrap or materialize
class Choice extends Component {
  
render(){

    return (
        <div>
         <li>
        {this.props.name} 
        <a href="#">view</a>
        <a href="#">edit</a>
   
        <form>

            <input type='submit' value='delete'/>
        </form>
        </li>
        </div>
    )
    }

}
export default Choice;
// import { Link } from "react-router-dom"
import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
 
render(){
const url = `/dilemma/${this.props.id}`
    return (
       <div className="eachDilemma">
         <li>
       <h3>{this.props.name} </h3> 
   
        <form>
        <Link to={url}>view</Link>
            
        </form>
        <input onClick={this.deleteDilemma} type='submit' value='delete'/>
        </li>
        </div>
    
    )
    }

}
export default Dilemma;