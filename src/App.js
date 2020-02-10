import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';

import Create from './components/Create';
import Edit from './components/Edit';
import 'mongodb-stitch';
import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk';

// dummy data
const data = [
  { id: 1, name: "Item 1", url: 100, loc:"sf, ca" },
  { id: 2, name: "Item 2", url: 102, loc:"sf, ca" }
];
const columns = [{
  dataField: 'id',
  text: 'Company'
}, {
  dataField: 'url',
  text: 'URL'
}, {
  dataField: 'loc',
  text: 'Location'
}];

export class App extends Component {

// Get the existing Stitch client
const stitchClient = Stitch.initializeDefaultAppClient("miusa-gxhmx");

// Get a client of the Remote Mongo Service for database access
const mongoClient = stitchClient.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas')

// Retrieve a database object
const db = mongoClient.db('vendor')

// Retrieve the collection in the database
const vendorTable = db.collection('vendor-item')

// Find documents and log them to console
vendorTable.find({}, {limit: 8})
  .asArray()
  .then(results => console.log('Results:', results))
  .then(results => {
    this.setState({ results });
    console.log("Found docs", results);  

  })
  .catch(err => {
    console.warn("nope", err);
  });

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'} className="navbar-brand"><span role="img" aria-label="US flag">🇺🇸</span> Made in USA List</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/edit/:id' component={ Edit } />
          </Switch>

          <BootstrapTable
            keyField="id"
            data={results}
            columns={columns}
            striped
            hover
            condensed
            bootstrap4
          />
      
        </div><div id="comments">xx</div>
        
      </Router>
    );
  }
}

export default App;