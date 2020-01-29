import React, { Component } from 'react'

class Weather2 extends Component {
  state={
    forecasts: [],
    city:'',
    tempType: 'C',
    currentMin: null,
    currentMax: null,
   
  }

  fetchCity = () => {
    fetch(`https://wyn-weather-api.herokuapp.com/cities/${this.props.match.params.id}`)
    .then(response  => response.json())
    .then(data  => this.setState({forecasts: data.forecasts, city: data.name}))
  }
  

  render() {
    return (
      <div className='weather2-container'>
        <h1 className="city-header">{this.state.city}</h1>
        <div className="forecast-container">
        {
          this.state.forecasts.map((forecast, index) => (
            <div className="forecast-div" key={index}>
              <table>
                <thead>
                  <th><h3 className="forecast-info">Date: {forecast.date}</h3></th>
                </thead>
                <tbody>
                  <tr><h3 className="forecast-info">Weather: {forecast.weather}</h3></tr>
                  <tr><img className="forecast-img" src={forecast.image} alt={forecast.weather}/></tr>
                  <tr><h3 className="foreccast-temps">Min: {Math.round(forecast.min_temp)} {this.state.tempType}</h3></tr>
                  <tr><h3 className="forecast-temps">Max: {Math.round(forecast.max_temp)} {this.state.tempType}</h3></tr>
                  <tr><h3 className="forecast-humidtiy">Humidity: {forecast.humidity}</h3></tr>
                  <button onClick={this.handleTempChange}>
                  Change To {this.state.tempType === 'C' ? 'F' : 'C'}
                  </button>
                </tbody>
              </table>
            </div>

            )) 
        }
        </div>
      </div>
      
    )
  }
  componentDidMount(){
    this.fetchCity()
  }
  
}
export default Weather2
