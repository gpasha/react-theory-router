import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Route, Link } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
          </ul>
        </nav>

        <hr/>

          <Route path='/' exact render={() => <h1>Home page</h1>} />
          <Route path='/about'  render={() => <About />} />
          <Route path='/cars' render={() => <Cars />} /> 
      </div>
    );
  }
}

export default App
