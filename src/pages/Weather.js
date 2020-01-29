import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Weather extends Component {
  state = {
    cities:[],
    userInput:''
  }

    handleSearch = (e) => {
      if (e.target.value){
        fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${e.target.value}`)
        .then(response => response.json())
        .then(data => {
          this.setState({cities:data})
        })
      }else{
        this.setState({cities:[]})
      }
    }
  
  render() {
    console.log(this.state.cities)
    return (
      <div className="weather1-container">CITY SEARCH
          <div className="city-search">
            <input
            type="text"
            onChange={this.handleSearch}
            id="search-cities"
            autoFocus
            autoComplete="off"/>
          </div>
          <div className="weather-cities-container"> 
            {
              this.state.cities.map(city => (
                <Link to={`/cities/${city.id}`}>
                  <div className="weather-cities" key={city.id}>
                    <h3>{city.name}</h3>
                  </div>
                </Link>
              ))
            }
          </div>
      </div>
    )
  }
}

export default Weather

