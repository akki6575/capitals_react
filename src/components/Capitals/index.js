import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].id}

  change = event => {
    this.setState({country: event.target.value})
  }

  render() {
    const {country} = this.state
    const reqCountry = countryAndCapitalsList.filter(
      each => each.id === country,
    )
    console.log(reqCountry)

    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Countries And Capitals</h1>
          <select id="capitals" value={country} onChange={this.change}>
            <option value={countryAndCapitalsList[0].id}>New Delhi</option>
            <option value={countryAndCapitalsList[1].id}>London</option>
            <option value={countryAndCapitalsList[2].id} selected>
              Paris
            </option>
            <option value={countryAndCapitalsList[3].id}>Kathmandu</option>
            <option value={countryAndCapitalsList[4].id}>Helsinki</option>
          </select>
          <label htmlFor="capitals">is capital of which country?</label>
        </div>
        <p className="Country">{reqCountry[0].country}</p>
      </div>
    )
  }
}

export default Capitals
