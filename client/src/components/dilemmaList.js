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
        axios.get('/dilemma')
            .then(res => {
                // console.log(res.data.dilemmas)
                this.setState({ dilemmas: res.data.dilemmas })
            })
        // .then(()=>{})
    }
    handleChange = (e) => {
        let newDilemma = { ...this.state.newDilemma }
        newDilemma[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({ newDilemma: newDilemma })
    }

    createDilemma = (e) => {
        e.preventDefault()
        axios.post('/dilemma', this.state.newDilemma)
            .then(res => {
                console.log(res.data)
                // const DilemmasList = [...this.state.dilemmas]
                // dilemmasList.unshift(res.data)
                // this.setState({
                //     newDilemma: {
                //         name: '',
                //         notesThoughts: ''
                //     },
                //     isDilemmaFormDisplayed: false,
                //     dilemmas: dilemmasList
                // })
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

            />
            )
        })
        return (
            <div>
                <h1 className="title">DilemmaList Page</h1>
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
                <ol>
                    {dilemmaComponent}


                </ol>

            </div>
        )
    }

}
export default DilemmaList;