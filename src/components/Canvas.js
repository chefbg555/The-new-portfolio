import React, { Component } from 'react'


const canvasStyle = {
  position: "fixed",
  top:0,
  left:0
}

class Canvas extends Component {
  render() {
    return (
      <div className="container demo">
        <div className="content">
          <div id="large-header" className="large-header">
            <canvas id="demo-canvas" style={canvasStyle}></canvas>
          </div>  
        </div>
      </div>
    )
  }
}

export default Canvas