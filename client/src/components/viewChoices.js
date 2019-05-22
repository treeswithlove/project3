import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class SingleChoice extends Component {
    state = {
        choice: {
            name: '',
            oldPerspective: ""
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get(`/choices/${this.props.match.params.choicesId}`).then(res => {
            this.setState({ choice: res.data.choice })
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const cloneChoice = { ...this.state.choice }
        cloneChoice[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({ choice: cloneChoice })
    }

    updateChoice = (e) => {
        e.preventDefault()
        console.log(this.state.choice)
        axios.put(`/choices/${this.props.match.params.choicesId}`, {
            name: this.state.choice.name,
            oldPerspective: this.state.choice.oldPerspective,

        })
            .then(() => {
                this.setState({ isEditFormDisplayed: false })
            })
    }

    deleteChoice = (e) => {
        e.preventDefault();
        axios.delete(`/choices/${this.props.match.params.choicesId}`)
            .then(() => {

                this.setState((state, props) => {
                    return { redirectToHome: !state.redirectToHome }
                })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to="/choices" />)
        }

        return (
            <div>
                <h1>Perspective</h1>
                <button onClick={this.toggleEditForm}>Edit</button>
                {
                    this.state.isEditFormDisplayed
                        ? <form onSubmit={this.updateChoice}>
                            <div>
                                <label htmlFor="name">Perspective</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.choice.name}
                                />
                            </div>
                            <div>
                                <label htmlFor="oldPerspective">Old Perspective</label>
                                <textarea
                                    id="oldPerspective"
                                    name="oldPerspective"
                                    onChange={this.handleChange}
                                    value={this.state.choice.oldPerspective}
                                />
                            </div>
                            <input type="submit" value="submit" />
                            <button onClick={this.deleteChoice}>Delete</button>

                        </form>
                        : <div>
                            <div>
                                Perspective: {this.state.choice.name}
                            </div>
                            <div>
                                Old Perspective: {this.state.choice.oldPerspective}


                            </div>

                        </div>
                }
                <Link to="/choices">Back to Choices Home</Link>

            </div>
        );
    }
}

export default SingleChoice;