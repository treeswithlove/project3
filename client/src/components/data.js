import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom';
import axios from "axios";

class Data extends Component {
    state = {
        data: {
            name: '',
            description: '',
            proCon: '',
            joy: Number,
            pain: Number,
            importance: Number
        },
        redirectToHome: false,
        isEditFormDisplayed: false
    }

    componentDidMount = () => {
        axios.get(`/data/${this.props.match.params.id}`).then(res => {
            this.setState({ data: res.data })
        })
    }

    deletedata = () => {
        axios.delete(`/data/${this.props.match.params.id}`).then(res => {
            this.setState({ redirectToHome: true })
        })
    }

    toggleEditForm = () => {
        this.setState((state, props) => {
            return { isEditFormDisplayed: !state.isEditFormDisplayed }
        })
    }

    handleChange = (e) => {
        const clonedata = { ...this.state.data }
        clonedata[e.target.name] = e.target.value
        this.setState({ data: clonedata })
    }

    updatedata = (e) => {
        e.preventDefault()
        axios
            .put(`/data/${this.props.match.params.id}`, {
                name: this.state.data.name,
                description: this.state.data.description
            })
            .then(res => {
                this.setState({ data: res.data, isEditFormDisplayed: false })
            })
    }

    render() {
        if (this.state.redirectToHome) {
            return (<Redirect to="/" />)
        }

        return (
            <div>
                <Link to="/">Back to datas Home</Link>
                <h1>Single data</h1>
                <button onClick={this.toggleEditForm}>Edit</button>
                {
                    this.state.isEditFormDisplayed
                        ? <form onSubmit={this.updatedata}>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    value={this.state.data.name}
                                />
                            </div>
                            <div>   
                            <label htmlFor="proCon">
                                Pros or Cons:
                                    <select value={this.state.value} onChange={this.handleChange}>
                                    <option value="pros">Pros</option>
                                    <option value="cons">Cons</option>
                                </select>
                            </label>
                                <input
                                    id="proCon"
                                    name="proCons"
                                    onChange={this.handleChange}
                                    value={this.state.data.proCon}
                                />
                            </div>
                            <div>
                                <label htmlFor="joy"></label>
                                <input
                                    id="joy"
                                    name="joy"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.data.joy}
                                />
                            </div>
                            <div>
                                <label htmlFor="pain"></label>
                                <input
                                    id="pain"
                                    name="pain"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.data.pain}
                                />
                            </div>
                            <div>
                                <label htmlFor="importance"></label>
                                <input
                                    id="importance"
                                    name="importance"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.data.importance}
                                />
                            </div>
                            <button>Update</button>
                        </form>
                        : <div>
                            <div>
                                Pro or Con: {this.state.data.proCon}
                            </div>
                            <div>
                                Name: {this.state.data.name}
                            </div>
                            <div>
                                Joy: {this.state.data.joy}
                            </div>
                            <div>
                                Name: {this.state.data.pain}
                            </div>
                            <div>
                                Importance: {this.state.data.importance}
                            </div>
                            <button onClick={this.deletedata}>Delete</button>
                        </div>
                }
            </div>
        );
    }
}

export default Data;