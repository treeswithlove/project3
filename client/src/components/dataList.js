import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Datas extends Component {
  state = {
      datas: [],
      newdata: {
        name: '',
        description: '',
        proCon: '',
        joy: Number,
        pain: Number,
        importance: Number
      },
      isdataFormDisplayed: false
  }

  componentDidMount = () => {
    axios.get('/data').then(res => {
        this.setState({datas: res.data})
    })
  }

  toggledataForm = () => {
      this.setState((state, props) => {
          return ({isdataFormDisplayed: !state.isdataFormDisplayed})
      })
  }

  handleChange = (e) => {
    const cloneNewdata = {...this.state.newdata}
    cloneNewdata[e.target.name] = e.target.value
    this.setState({newdata: cloneNewdata})
  }

  createdata = (e) => {
    e.preventDefault()
    axios
        .post('/data', {
            name: this.state.newdata.name,
            description: this.state.newdata.description
        })
        .then(res => {
            const datasList = [...this.state.datas]
            datasList.unshift(res.data)
            this.setState({
                newdata: {
                    name: '',
                    description: ''
                },
                isdataFormDisplayed: false,
                datas: datasList
            })
        })

  }

  render() {
    return (
      <div>
        <h1>datas</h1>
        {
            this.state.datas.map(data => {
                return (
                    <div key={data._id}>
                        <Link
                            to={`/${data._id}`}
                        >
                            {data.name}
                        </Link>
                    </div>
                )
            })
        }
        <button onClick={this.toggledataForm}>+ New data</button>
        {
            this.state.isdataFormDisplayed
                ? <form onSubmit={this.createdata}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            value={this.state.newdata.name}
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
                                    value={this.state.newdata.proCon}
                                />
                            </div>
                            <div>
                                <label htmlFor="joy"></label>
                                <input
                                    id="joy"
                                    name="joy"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.newdata.joy}
                                />
                            </div>
                            <div>
                                <label htmlFor="pain"></label>
                                <input
                                    id="pain"
                                    name="pain"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.newdata.pain}
                                />
                            </div>
                            <div>
                                <label htmlFor="importance"></label>
                                <input
                                    id="importance"
                                    name="importance"
                                    type="number"
                                    onChange={this.handleChange}
                                    value={this.state.newdata.importance}
                                />
                            </div>
                    <button>Create</button>
                </form>
                : null
        }
      </div>
    )
  }
}

export default Datas;