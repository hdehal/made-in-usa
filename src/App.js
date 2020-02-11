import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap-table-next';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';

import Create from './components/Create';
import Edit from './components/Edit';

// Define MongoDB Stitch App ID
const APP_ID = "miusa-gxhmx";

// Initialize MongoDB Stitch
const app = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeAppClient(APP_ID);

// Define client/factory
  const mongoClient = app.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );  

// Define db and collection
  const items = mongoClient.db("vendor").collection("vendor-item");

// JSON table column data
const columns = [{
  dataField: 'company',
  text: 'Company'
}, {
  dataField: 'url',
  text: 'URL'
}, {
  dataField: 'loc',
  text: 'Location'
}, {
  dataField: 'gender',
  text: 'Gender'
}, {
  dataField: 'tags',
  text: 'Tags'
}];

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
      items.find({})
      .toArray()
      .then(data => 
        this.setState({data})
      )

      // Error logging
      .catch(err => {
        console.warn("Error:", err);
      });
  }

  async componentDidMount(){
    this.getData();
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
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
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
            data={this.state.data}
            columns={columns}
            striped
            hover
            condensed
            bootstrap4
          />
        </div>
      </Router>
    )
  }
}

export default App;