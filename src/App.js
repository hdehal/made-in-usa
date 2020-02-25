import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

// Modularized component imports
import AddForm from './components/addForm'
import DisplayTable from './components/displayTable'
import ListManagement from './components/listManagement'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      selected: []
    }
  }

  render() {

    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand"><span role="img" aria-label="US flag">🇺🇸</span> Made in USA List</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                  <Link to={'/addForm.js'} className="nav-link">Add</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
          </Switch>

          <DisplayTable />

          <ListManagement selectedItems={this.state.selected} />

          <AddForm />

        </div>
      </Router>
    )
  }
}

export default App;