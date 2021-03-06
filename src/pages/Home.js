import React, { Component } from 'react'



(function() {
  // Set our main variables
  let scene,  
    renderer,
    camera,
    model,                              // Our character
    neck,                               // Reference to the neck bone in the skeleton
    waist,                               // Reference to the waist bone in the skeleton
    possibleAnims,                      // Animations found in our file
    mixer,                              // THREE.js animations mixer
    idle,                               // Idle, the default state our character returns to
    clock = new THREE.Clock(),          // Used for anims, which run to a clock instead of frame rate 
    currentlyAnimating = false,         // Used to check whether characters neck is being used in another anim
    raycaster = new THREE.Raycaster(),  // Used to detect the click on our character
    loaderAnim = document.getElementById('js-loader');
  
  })();

class Home extends Component{
  render(){
    return(
 
      <div>
        <h1 className="landing-header">Hey I'm Brendan Guralsky</h1>
        <h2  className="landing-portfolio">and this is my portfolio </h2>
      </div>
        
      <div className="wrapper">
        <canvas id="c"></canvas>
      </div>
    )
  }
}
export default Home