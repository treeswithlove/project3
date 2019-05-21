import { Link } from "react-router-dom"
import React, { Component } from 'react'
import axios from 'axios'


//styled components or bootstrap or materialize
class Choice extends Component {
    state = {
        choice: {
            name: ''
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }
    componentDidMount = () => {
        axios.get(`/choices/${this.props.id}`).then(res => {
            this.setState({Choice: res.data.choice})
        })
    }
    toggleEditForm = () => {
        this.setState((state, props) => {
            return {isEditFormDisplayed: !state.isEditFormDisplayed}
        })
    }
    handleChange = (e) => {
        const cloneChoice = {...this.state.choice}
        cloneChoice[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({choice: cloneChoice})
    }
    deleteChoice = (e) => {
        e.preventDefault();
        axios.delete(`/choices/${this.props.id}`)
        .then(() => this.props.getChoices())
    }
    updateChoice = (e) => {
        e.preventDefault()
        console.log(this.state.choice)
        axios.put(`/choices/${this.props.id}`, {
        name: this.state.choice.name
        })
          .then(() => {
              this.setState({isEditFormDisplayed: false})
          }).then(() => this.props.getChoices())
    }
 
render(){
const url = `/choices/${this.props.id}`
    return (
       <div className="eachChoice">
         <li>
         <Link to={url}><h3>{this.props.name} </h3> </Link>
        
        <button onClick={this.toggleEditForm}>Edit</button>

        
        {
            this.state.isEditFormDisplayed
                ? <form onSubmit={this.updateChoice}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.choice.name}
                        />
                    </div>
        
                    <input type="submit" value="submit" />
                    <input onClick={this.deleteChoice} type='submit' value='delete'/>
                </form>
                : null

        }
        </li>
        </div>
    
    )
    }

}
export default Choice;