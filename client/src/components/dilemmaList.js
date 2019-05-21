// import { Link } from "react-router-dom"
import React, { Component } from 'react'
import Dilemma from './dilemma'
import axios from 'axios'

class DilemmaList extends Component {
    state = {
        dilemmas: [],
        createDilemmaForm: true,
        newDilemma: {
            name: "",
            notesThoughts: ""
        }
    }
    
    componentDidMount = () => {
        this.getDilemmas();
    }
    getDilemmas = () => {
        axios.get('/dilemma')
        .then(res => {
            this.setState({ dilemmas: res.data.dilemmas })
        })
    }
    handleChange = (e) => {
        let newDilemma = { ...this.state.newDilemma }
        newDilemma[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({ newDilemma })
    }
    toggleCreateForm = () => {
        this.setState((state) => {
        return {createDilemmaForm: ! state.createDilemmaForm}
    })
    }
    createDilemma = (e) => {
        e.preventDefault()
        axios.post('/dilemma', this.state.newDilemma)
            .then(res => {
                console.log(res.data)
                const dilemmasList = [...this.state.dilemmas]
                dilemmasList.unshift(res.data)
                this.setState({
                    newDilemma: {
                        name: '',
                        notesThoughts: ''
                    },
                    createDilemmaForm: false,
                    dilemmas: dilemmasList
                })
            })
    }

    render() {
        const dilemmas = this.state.dilemmas
        const dilemmaComponent = dilemmas.map((dilemma, index) => {
            return (<Dilemma
                key={index}
                index={index}
                id={dilemma._id}
                name={dilemma.name}
                notesThoughts={dilemma.notesThoughts}
                getDilemmas={this.getDilemmas}
            />

            )
        })
        return (
            <div>
                <h1 className="title">Questions</h1>
                <button onClick={this.toggleCreateForm}><h4>New Point of View</h4></button>
                {
                    this.state.createDilemmaForm

                        ? <form onSubmit={this.createDilemma}>
                       
                            <div>
                                <label>name</label>
                                <input
                                    className='dilemmaCreateName'
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={this.handleChange}
                                    value={this.state.newDilemma.name} />
</div>
<div>
                                <label>Thoughts</label>
                                <textarea
                                    className='dilemmaCreateThoughts'
                                    id='notesThoughts'
                                    name='notesThoughts'
                                    onChange={this.handleChange}
                                    value={this.state.newDilemma.notesThoughts} />
                            
                            </div>
<div>
                                <input type='submit' value='submit' />
                            </div>
                        </form>

                        : null
                }
                <ul className="ulDilemmas">
                    {dilemmaComponent}


                </ul>

            </div>
        )
    }

}
export default DilemmaList;