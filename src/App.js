import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import logo from './assets/woodoo.png'
import './App.css'
import {Home, Contacts, Projects, About} from './components/pages'
import 'font-awesome/css/font-awesome.css'


const App = () => (
  <Router >
    <div className="page">
      <div className="navigation">
        <Link to='/' className="navigation root-link">
          <img src={logo} alt="" className="logo"/>
          <span className="">Bogdan Kostrytskyi<br/>Web Developer</span>
        </Link>
        <div className="navigation right">
          <Link to='/about'>About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contacts'>Hire</Link>
        </div>
      </div>
      <hr/>

      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/projects' component={Projects}/>
      <Route path='/contacts' component={Contacts}/>
    </div>
  </Router>
)

export default App
