// import { Link } from "react-router-dom"
import React, { Component } from 'react'

//styled components or bootstrap or materialize
class Dilemma extends Component {
  
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
export default Dilemma;