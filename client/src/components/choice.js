import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


//styled components or bootstrap or materialize
class Dilemma extends Component {
    state = {
        choice: {
            name: ''
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    deleteDilemma = (e) => {
        e.preventDefault();
        axios.delete(`/choices/${this.props.id}`)
        .then(() => this.props.getDilemmas())
    }
 
render(){
const url = `/choices/${this.props.id}`
    return (
       <div className="eachChoice">
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