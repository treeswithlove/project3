// import { Link } from "react-router-dom"
import React, { Component } from 'react'
import Choice from './choice'
import axios from 'axios'

class ChoiceList extends Component {
    state = {
        choices: [],
        createChoiceForm: true,
        newDelimma: {
            name: "",
            notesThoughts: ""
        }
    }

    componentDidMount = () => {
        axios.get('/choice')
            .then(res => {
                // console.log(res.data.choices)
                this.setState({ choices: res.data.choices })
            })
        // .then(()=>{})
    }
    handleChange = (e) => {
        let newChoice = { ...this.state.newChoice }
        newChoice[e.target.name] = e.target.value
        console.log(e.target.name)
        this.setState({ newDelimma: newChoice })
    }

    createDilemma = (e) => {
        e.preventDefault()
        console.log(this.state.newDelimma)
        // console.log( this.state.newDelimma.notesThoughts)
        axios.post('/dilemma', this.state.newDelimma)


            //name: this.state.newDelimma.name,
            // notesThoughts: this.state.newDelimma.notesThoughts

            .then(res => {
                console.log(res.data)
                // const delimmasList = [...this.state.delimmas]
                // delimmasList.unshift(res.data)
                // this.setState({
                //     newDelimma: {
                //         name: '',
                //         notesThoughts: ''
                //     },
                //     isDelimmaFormDisplayed: false,
                //     delimmas: delimmasList
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
                                    value={this.state.newDelimma.name} />

                                <label>Thoughts</label>
                                <textarea
                                    className='dilemmaCreateThoughts'
                                    id='notesThoughts'
                                    name='notesThoughts'
                                    onChange={this.handleChange}
                                    value={this.state.newDelimma.notesThoughts} />
                            
                        
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