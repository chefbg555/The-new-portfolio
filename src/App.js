import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {Helmet} from 'react-helmet'
import HomeApps from './pages/HomeApps'
import Weather from './pages/Weather'
import Weather2 from './pages/Weather2'
import TetrisApp from './pages/Tetrisapp'
import AboutMe from './pages/AboutMe'
import TodoApp from './pages/TodoApp'
import Home from './pages/Home'

import './App.css';


const App = () => (
  <BrowserRouter>
    <div>
      <Helmet>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
        <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
      </Helmet>
    </div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/HomeApps' component={HomeApps}/>
      <Route path='/weather' component={Weather} />
      <Route path='/cities/:id'component={Weather2}/>
      <Route path='/tetris' component={TetrisApp}/>
      <Route path='/aboutme' component={AboutMe}/>
      <Route path='/todoapp' component={TodoApp}/>
    </Switch>
  </BrowserRouter>
)

export default App;
