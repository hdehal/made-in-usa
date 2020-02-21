import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';

// Modularized imports
import { item } from './components/stitchAuth'
import { tableColumns } from './components/tableColumns'
import AddForm from './components/addForm'

class App extends Component {

    // Initial state
    constructor(props){
      super(props);

      this.state = {
        data: []
      }
    }

    getData(){
        // Find database documents
        item.find({})
        .toArray()
        .then(data => 
          data.map(x=>{ return { ...x, id: x._id.toString()}; })
        ).then(data => this.setState({data}))

        // Error logging
        .catch(err => {
          console.warn("Error:", err);
        });
    }

    async componentDidMount(){
      this.getData();
    }

  render() {

    // Delete functionality
    const handleOnSelect = (row, isSelect) => {
      // If row selected setState
      if (isSelect) {
        this.setState({
          selected: row.id
        })
      // Otherwise clear the state
      } else {
        this.setState({
          selected: []
        })
      }
    }

    // Define selectRow
    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      selectColumnPosition: 'right',
      hideSelectAll: true,
      onSelect: handleOnSelect
    };

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

          <BootstrapTable
            keyField="id"
            data={this.state.data}
            columns={tableColumns}
            selectRow={ selectRow }
            filter={ filterFactory() }
            striped
            hover
            condensed
            bootstrap4
          />

          <AddForm />

        </div>
      </Router>
    )
  }
}

export default App;