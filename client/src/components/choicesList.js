// import { Link } from "react-router-dom"
import React, { Component } from 'react'
import Choice from './choice'
import axios from 'axios'

class ChoiceList extends Component {
    state = {
        choices: [],
        createChoiceForm: false,
        newChoice: {
            name: "",
            oldPerspective: ""
        }
    }

    componentDidMount = () => {
        this.getChoices();
    }
    getChoices = () => {
        axios.get('/choices')
            .then(res => {
                this.setState({ choices: res.data.choices })
            })
    }
    handleChange = (e) => {
        let newChoice = { ...this.state.newChoice }
        newChoice[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({ newChoice })
    }
    toggleCreateForm = () => {
        this.setState((state) => {
            return { createchoiceForm: !state.createchoiceForm }
        })
    }
    createChoice = (e) => {
        e.preventDefault()
        axios.post('/choices', this.state.newChoice)
            .then(res => {
                console.log(res.data)
                const choicesList = [...this.state.choices]
                choicesList.unshift(res.data)
                this.setState({
                    newChoice: {
                        name: '',
                        oldPerspective: ""
                    },
                    createChoiceForm: false,
                    choices: choicesList
                })
            })
    }

    render() {
        const choices = this.state.choices
        const choiceComponent = choices.map((choices, index) => {
            return (<Choice
                key={index}
                index={index}
                id={choices._id}
                name={choices.name}
                getChoices={this.getChoices}
            />

            )
        })
        return (
            <div>
                <h1 className="title">Change In Perspective</h1>
                <button onClick={this.toggleCreateForm}><h4>New Perspective</h4></button>
                {
                    this.state.createchoiceForm

                        ? <form onSubmit={this.createChoice}>

                            <div>
                                <label>Perspective</label>
                                <input
                                    className='choiceCreateName'
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={this.handleChange}
                                    value={this.state.newChoice.name} />
                            </div>
                            <div>
                                <label htmlFor="oldPerspective">Old Perspective</label>
                                <textarea
                                    id="oldPerspective"
                                    name="oldPerspective"
                                    onChange={this.handleChange}
                                    value={this.state.newChoice.oldPerspective}
                                />
                            </div>

                            <div>
                                <input type='submit' value='submit' />
                            </div>
                        </form>

                        : null
                }
                <ul className="ulDilemmas">
                    {choiceComponent}


                </ul>

            </div>
        )
    }

}
export default ChoiceList;