import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Route, NavLink, Switch, Redirect } from 'react-router-dom'
import carDetail from './CarDetail/CarDetail'

class App extends Component {

  state = {
    isLoggedIn: false
  }

  loginHandler = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

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
                pathname: '/cars'
              }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>
          <h1>Logged in: {this.state.isLoggedIn ? 'TRUE' : 'FALSE'}</h1>
          <button onClick={this.loginHandler}>Log</button>
        <hr/>

        <Switch>
          <Route path='/' exact render={() => <h1>Home page</h1>} />
          {
            this.state.isLoggedIn
              ? <Route path='/about'  render={() => <About />} />
              : null
          }
          <Route path='/cars/:name' component={carDetail} />
          <Route path='/cars' component={Cars} />
          <Redirect to='/' />
          
          {/* <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default App
