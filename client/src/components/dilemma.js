import { Link } from "react-router-dom"
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
    //gets the dilemma
    componentDidMount = () => {
        axios.get(`/dilemma/${this.props.id}`).then(res => {
            this.setState({dilemma: res.data.dilemma})
        })
    }
    // toggles form
    toggleEditForm = () => {
        this.setState((state, props) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }
    //creates clone as placeholder
    handleChange = (e) => {
        const newDilemma = {...this.state.dilemma}
        newDilemma[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({dilemma: newDilemma})
    }
    //deletes Dilemma
    deleteDilemma = (e) => {
        e.preventDefault();
        axios.delete(`/dilemma/${this.props.id}`)
        .then(() => this.props.getDilemmas())
    }
    //updates dilemma
    updateDilemma = (e) => {
        e.preventDefault()
        console.log(this.state.dilemma)
        axios.put(`/dilemma/${this.props.id}`, {
        name: this.state.dilemma.name,
        notesThoughts: this.state.dilemma.notesThoughts
        })
          .then(() => {
              this.setState({isEditFormDisplayed: false})
          }).then(() => this.props.getDilemmas())
    }
 
render(){
const url = `/dilemma/${this.props.id}`
    return (
        //when map, maps through data this will be seen for each
       <div className="eachDilemma">
         <li><Link to={url}>
       <h3>{this.props.name} </h3> </Link>
       <h4>{this.props.notesThoughts} </h4> 
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
                        <label htmlFor="notesThoughts">Old Thoughts</label>
                        <textarea
                            id="notesThoughts"
                            name="notesThoughts"
                            onChange={this.handleChange}
                            value={this.state.dilemma.notesThoughts}
                        />
                    </div>
                    <input type="submit" value="submit" />
                    <input onClick={this.deleteDilemma} type='submit' value='delete'/>

                </form>
                : null

        }
        </li>
        </div>
    
    )
    }

}
export default Dilemma;