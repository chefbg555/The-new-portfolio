import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import instagram from '../images/chefbg.png'
import Canvas from "../components/Canvas"
import Typist from "react-typist"




function refreshPage() {
  window.location.reload(false)
}

class AboutMe extends Component {
  
  render() {
    return (
      <div className="brendan">
        <Canvas/>
        <Header/>
        <div className='home-button'>
        <Link to="/">
          <button
            id="home-button "
            type="button"
            style={{position:"absolute",
            top:"8vh",
            left:"4vw",
            background:"none",
            border:"none",
            margin:"0",
            padding:"0",
            cursor:"pointer",
            fontSize: "2rem",
            outline:"none"
            }}
            >
            Back to Home
          </button> 
          <button
            id="home-button"
            type="button"
            style={{position:"absolute",
            top:"8vh",
            left:"4vw",
            background:"none",
            border:"none",
            margin:"0",
            padding:"0",
            cursor:"pointer",
            fontSize: "2rem",
            outline:"none"
            }}
            >
            Back to Home
          </button>
        </Link>
      </div>
        <button className="refresh-button" onClick={refreshPage}>CLICK ME</button>
        <a className="instagram" href="https://www.instagram.com/brendanguralsky5/"><img src={instagram} alt="instagram"></img></a>
        <div className="typist-container">
        <Typist cursor={{hideWhenDone: true}}>
             Hi I'm Brendan Guralsky, I really enjoy working with React and Node.js!!!
           I also understand the fundamentals of working with a database. I love to learn new things, and am READY for ANY opportunity presented
          to me!!!
          </Typist>
        </div>
      </div>
    )
  }
}
export default AboutMe
