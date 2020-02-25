import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';

// Modularized component imports
import AddForm from './components/addForm'
import DisplayTable from './components/displayTable'

class App extends Component {

  constructor(props){
    super(props);

    this.handleOnSelect = this.handleOnSelect.bind(this)

    this.state = {
      selected: []
    }
  }

    // Delete functionality setState
    handleOnSelect(row, isSelect){
      // If row selected setState
      if (isSelect) {
          console.log(row)
          this.setState({
          selected: row.id
          })
      // Otherwise clear the state
      } else {
          console.log(row)
          this.setState({
          selected: []
          })
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

          <DisplayTable handleOnSelectProp={this.handleOnSelect} />

          <AddForm selected={this.state.selected} />

        </div>
      </Router>
    )
  }
}

export default App;