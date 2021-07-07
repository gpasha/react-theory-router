import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'active-link'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{color: 'blue'}}>About</NavLink>
            </li>
            <li>
              <NavLink to={{
                pathname: '/cars',
                search: '?a=1&b=2',
                hash: 'some-hash'
              }}>Cars</NavLink>
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
