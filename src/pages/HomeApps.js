import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import homeweather from '../images/homeweather.jpg'
import tetris from '../images/tetris.jpg'
import hometodoapp from '../images/hometodoapp.jpg'
import homewhoami from '../images/homewhoami.jpg'


class HomeApps extends Component {
  render() {
    return (
      <div className="home-container">
        <Link to="/todoapp"><div className="home-links"><img src={hometodoapp} alt="todoapp"/><div className='todoapp'></div></div></Link>
        <Link to="/weather"><div className="home-links"><img src={homeweather} alt="weather"/></div></Link>
        <Link to="/tetris"><div className="home-links"><img src={tetris} alt="cards"/></div></Link>
        <Link to="/aboutme"><div className="home-links"><img src={homewhoami} alt="aboutme"/></div></Link>
      </div>
    )
  }
}
export default HomeApps
